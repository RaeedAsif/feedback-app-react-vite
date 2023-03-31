
import { Button } from "../../components/Button"
import { useFormik } from 'formik';
import { FormWrapper } from "../SignUp/style";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { getAccessToken, signUp } from "../../services/api";
import { PATHS } from "../../main";
import { CardWrapper } from "../SignUp/style";
import { useEffect, useState } from "react";

export const SignUpForm:React.FC = () =>{
    const navgate = useNavigate()
    const [token, setToken] = useState(String)
    const { mutate, isLoading, data, error} = useMutation('signUp', signUp)

    useEffect(()=>{
      const t = getAccessToken()
      if (t) navgate(PATHS.LIST_FB)
    }, [token])

    const formik = useFormik({
        initialValues: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: '',
        },
        onSubmit: values => {
          const paylaod = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
          }
          mutate(paylaod,{
            onSuccess:(data)=>{
              if(data) navgate(PATHS.SIGN_IN)
            },
          })
        },
    });

    return (
      <CardWrapper>
        <FormWrapper onSubmit={formik.handleSubmit}>
            <div className="card_header">
              <svg fill="#7878bd" viewBox="0 0 16 16" id="register-16px" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_184" data-name="Path 184" d="M57.5,41a.5.5,0,0,0-.5.5V43H47V31h2v.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V31h2v.5a.5.5,0,0,0,1,0v-1a.5.5,0,0,0-.5-.5H55v-.5A1.5,1.5,0,0,0,53.5,28h-3A1.5,1.5,0,0,0,49,29.5V30H46.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,57.5,41ZM50,29.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V31H50Zm11.854,4.646-2-2a.5.5,0,0,0-.708,0l-6,6A.5.5,0,0,0,53,38.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.354-.146l6-6A.5.5,0,0,0,61.854,34.146ZM54,40V38.707l5.5-5.5L60.793,34.5l-5.5,5.5Zm-2,.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,40.5Zm0-3a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,37.5ZM54.5,35h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" transform="translate(-46 -28)"></path> </g></svg>
              <h1 className="form_heading">Sign Up</h1>
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <div className="field">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
            </div>

            <div className="field">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <div className="field">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirm_password}
              />
            </div>
        
            <Button text="submit" />
        </FormWrapper>
      </CardWrapper>

    )
}
