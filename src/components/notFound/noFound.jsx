
import { Link } from "react-router-dom"

const NoFound =() => {
    return(
        <>
        <h1> NO ENCONTRADA</h1>
        <Link to={'/'}> volver a productos</Link>
        </>
    )
}
export default NoFound