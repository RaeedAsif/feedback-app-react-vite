
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../main";

export const SignOut:React.FC = () =>{    
    const navgate = useNavigate()
    useEffect(()=>{
        localStorage.setItem("access_token", "")
        localStorage.setItem("refresh_token", "")
        
        navgate(PATHS.SIGN_IN)
    })

    return <>{}</>
}