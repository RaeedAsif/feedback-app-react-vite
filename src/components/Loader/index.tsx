import { LoaderWrapper } from "./style"

export const Loader:React.FC = () =>{
    return (
        <LoaderWrapper>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        </LoaderWrapper>
    )
}