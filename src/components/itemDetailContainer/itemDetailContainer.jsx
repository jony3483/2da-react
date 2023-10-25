import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
const {id} = useParams()
const [producto, setProducto] = useState()

useEffect (() => {
    fetch('https://fakestoreapi.com/products/${id}')
        .then(res=>res.json())
        .then(json=> {
            setProducto(json)
            console.log(json)
        })
        .catch(error => console.error(error))

    }, [id])

    return(
        <>
        <h3>soy el producto {producto?.title}</h3>
        <p>descripcion: {producto?.description}</p>
        </>
    )
}
export default ItemDetailContainer