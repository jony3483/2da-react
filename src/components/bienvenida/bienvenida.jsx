import { Link } from "react-router-dom"


const Bienvenida = () => {
    return(
        <>
        <h1>Bienvenido</h1>
        <Link to={'/'}> ir a productos</Link>
        </>
    )
}
export default Bienvenida