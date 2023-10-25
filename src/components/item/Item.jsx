import { Link } from "react-router-dom"
import styles from "../styles.module.css"

const Item =({producto}) => {
    return(
        <div className={styles.card}>
            <h4>{producto.title}</h4>
            <p>USD{producto.price}</p>
            <Link to={`/item/${producto.id}`}>ver mas</Link>
        </div>
    )
}

export default Item