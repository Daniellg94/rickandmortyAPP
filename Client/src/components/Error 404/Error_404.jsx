import { useLocation } from "react-router-dom"; 
const Error404 = () => {

    const location=useLocation();
     console.log(location)       
    return (
//userParams userNavigate
        <nav>
            <h1>error 404</h1>
            <p>estas fuera de los limites del universo vuelve o moriras</p>
        </nav>
    )
}
export default Error404;