import styled from "styled-components"

export const ButtonWrapper = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    & button{
        height: 100%;
        width: 100%;
        border:none;
        border-radius: 5px;
        background-color: #7878bd;
        color: #ffffff
    }
    :hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`
export const Button = styled.button`

`