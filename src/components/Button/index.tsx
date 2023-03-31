import * as Styled from "./style"
type props = {
    text:string
    onClick?: () => void
}

export const Button:React.FC<props> = ({text, onClick}) =>{
    return (
        <Styled.ButtonWrapper>
            <Styled.Button type="submit" onClick={onClick}>
                {text}
            </Styled.Button>
        </Styled.ButtonWrapper>
 )
}