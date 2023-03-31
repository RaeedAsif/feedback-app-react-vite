import axios, {AxiosError, AxiosHeaders, AxiosResponse} from 'axios'
import { Auth } from '../models/auth';
import { ListFeedback } from '../models/feedback';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { User } from '../models/user';

enum API_URL {
    SIGN_IN = '/login',
    SIGN_UP = '/register',
    CREATE_FB = '/feedback',
    LIST_FB = '/feedbacks',
    REFRESH_TOKEN = '/refreshtoken',
    CURRENT_USER = '/user'
}

enum TOKEN {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',

}

const baseURL = "http://localhost:8080"

const api = axios.create({
    baseURL
})

const apiAuth = axios.create({
    baseURL
})

interface GeneralResponse<T> {
    status : number
    message: string
    data?: T
    error?: string
    id?: number 
}

apiAuth.interceptors.request.use(async config => {
    let token = localStorage.getItem(TOKEN.ACCESS_TOKEN);
    if (token){
        const decoded:any = jwtDecode(token);
        const currentTime = Date.now().valueOf() / 1000;

        if (decoded.exp < currentTime) {
            const rToken = localStorage.getItem(TOKEN.REFRESH_TOKEN);
            if (!rToken) {
              return Promise.reject(new Error("No access token or refresh token found."));
            }

            const decoded:any = jwtDecode(rToken);
            const currentTime = Date.now().valueOf() / 1000;

            if (decoded.exp < currentTime) {
                localStorage.setItem(TOKEN.ACCESS_TOKEN, "")
                localStorage.setItem(TOKEN.REFRESH_TOKEN, "")
                return Promise.reject(new Error("Refresh token is expired."));
            }

            const auth = await refreshToken(rToken);
            if (auth) {
                if (auth) {
                    localStorage.setItem(TOKEN.ACCESS_TOKEN, auth.access_token);
                    localStorage.setItem(TOKEN.REFRESH_TOKEN, auth.refresh_token);
                    token = auth.access_token
                }

            }
        }
        
    }

    if (config.headers) {
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  async error => {
    if (error.response.status === 403) {
      const rToken = localStorage.getItem(TOKEN.REFRESH_TOKEN);
      if (rToken) {
        const decoded:any = jwtDecode(rToken);
        const currentTime = Date.now().valueOf() / 1000;
        if (decoded.exp < currentTime) {
            localStorage.setItem(TOKEN.ACCESS_TOKEN, "")
            localStorage.setItem(TOKEN.REFRESH_TOKEN, "")
            return Promise.reject(new Error("Refresh token is expired."));
        }
        const token = await refreshToken(rToken);
        if (token) {
          localStorage.setItem(TOKEN.ACCESS_TOKEN, token.access_token);
          localStorage.setItem(TOKEN.REFRESH_TOKEN, token.refresh_token);
        }
      }
    }
    return Promise.reject(error);
  });



export const signIn = async (formData:{
    email: string
    password: string
}) => {
    try{
        const response = await api.post<GeneralResponse<Auth>>(API_URL.SIGN_IN, formData)
        return response.data
    }
    catch (error:any){
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error)
    }

}

export const signUp = async (formData:{
    first_name: string
    last_name: string
    email: string
    password: string
    confirm_password: string
}) => {
    try {
        const response = await api.post<GeneralResponse<null>>(API_URL.SIGN_UP, formData)
        return response.data
    }
    catch (error:any){
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}

export const createFeedback = async (formData:{
    type: string
    feedback: string
}) => {
    try {
        const response = await apiAuth.post<GeneralResponse<null>>(API_URL.CREATE_FB, formData)
        return response.data
    }
    catch (error:any){
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}

export const listFeedback = async (page =1, type = "") => {
    try {
        let params = `?page=${page}`
        if(type!="All") params += `&type=${type}`
        const response = await apiAuth.get<GeneralResponse<ListFeedback>>(API_URL.LIST_FB+params)
        return response.data.data
    }
    catch (error:any){
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}


export const getCurrentUser = async () => {
    try {
        const response = await apiAuth.get<GeneralResponse<User>>(API_URL.CURRENT_USER)
        return response.data
    }
    catch (error:any){
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}

const refreshToken = async (token:string) => {
    try {
        const response = await api.get<GeneralResponse<Auth>>(API_URL.REFRESH_TOKEN,{ headers: { Authorization: `Bearer ${token}` } } )
        return response.data.data
    }
    catch (error:any){
        toast.error(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}

export const getAccessToken = () => {    
    return localStorage.getItem(TOKEN.ACCESS_TOKEN)
}
