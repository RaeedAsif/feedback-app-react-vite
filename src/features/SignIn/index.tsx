
import { Button } from "../../components/Button"
import { useFormik } from 'formik';
import {  CardWrapper, FormWrapper } from "../SignIn/style";
import {  useMutation } from 'react-query'
import { getAccessToken, signIn } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../main";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignInForm:React.FC = () =>{    
    const navgate = useNavigate()

    const [token, setToken] = useState(String)
    useEffect(()=>{
      const t = getAccessToken()
      if (t) navgate(PATHS.LIST_FB)
    }, [token])

    const { mutate, isLoading, data, error} = useMutation('signIn', signIn, )

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: values => {
            mutate({email: values.email, password: values.password},{
                onSuccess:(data) => {
                    if (data && data.data){
                      localStorage.setItem("access_token", data.data?.access_token)
                      localStorage.setItem("refresh_token", data.data?.refresh_token)
                      navgate(PATHS.LIST_FB)
                    }
                },
            })
        },
      });


    return (
      <CardWrapper>
        <FormWrapper onSubmit={formik.handleSubmit}>
            <div className="card_header">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="currentColor"></path>
              </svg>
              <h1 className="form_heading">Sign in</h1>
            </div>
             <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="field">
              <label htmlFor="feedback">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

            </div>
            <Button text="LOGIN" />
            <div className="link">
              <a href="register">create a free account</a>
            </div>
        </FormWrapper>
      </CardWrapper>
    )
}