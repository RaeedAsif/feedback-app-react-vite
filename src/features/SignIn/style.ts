import styled from "styled-components"


export const PageWrapper = styled.div`
    background-color: #e8e8e8;
    padding: 15rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 `

export const CardWrapper = styled.div`
    width: 380px; 
    height: 508px;
    background: #F4F6FB;
    border: 1px solid white;
    border-radius: 12px;
    box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
    -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
    -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
`

export const FormWrapper = styled.form`
    padding: 50px;

    & .card_header {
        display: flex;
        align-items: center;

        & .form_heading {
            padding-bottom: 40px;
            font-size: 42px;
            color: #7878bd;
        }

        & svg {
            color: #7878bd;
            margin-bottom: 40px;
            margin-right: 10px;
            height: 48px;
            width: 48px;
        }
          
    }

    & .field {
        padding-bottom: 20px;

        & input {
            border-radius: 5px;
            background-color: #e9e9f7;
            padding: 10px;
            width: 100%;
            color: #7a7ab3;
            border: 1px solid #dadaf7
        }
          
        & input:focus-visible {
            outline: 1px solid #aeaed6;
        }
          
        & input::placeholder {
            color: #bcbcdf;
        }

        & label {
            color: #B2BAC8;
            font-size: 14px;
            display: block;
            padding-bottom: 4px;
        }
    }


    & button {
        background-color: #7878bd;
        font-size: 14px;
        padding: 7px 12px;
        height: auto;
        font-weight: 500;
        color: white;
    }
        
    & button:hover {
        background-color: #5f5f9c;
        cursor: pointer;
    }

    & .link{
        font-size: 14px;
        margin-top: 28px;        
    }

}
    
 `