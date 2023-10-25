import { useState } from "react";
import { useEffect } from "react";
import Item from "../item/item";
import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const {nombreCategoria} = useParams()

useEffect(() => {

    const url = nombreCategoria ? `https://fakestoreapi.com/products/category/${nombreCategoria}` : `https://fakestoreapi.com/products`
    fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))
            console.log(nombreCategoria)
}, [nombreCategoria])



    return(
        <>
            <Link to={'/bienvenida'}>ir a bienvenida</Link>
            <h2 className="saludo">{greeting}</h2>
            {products.map((pr, index) => <Item producto={pr} key={index}/>)}
        </>
    )
}

export default ItemListContainer