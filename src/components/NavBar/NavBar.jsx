import CardWitdget from "../CartWidget/CartWidget";
import styles from '../styles.module.css'

const NavBar = () => {
    const arrayDeCategorias =  [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]
    return(
        <nav className={styles.container}>
            <h1 className={styles.h1}>TIENDA</h1>
            {arrayDeCategorias.map((cat, index) => <p key={index}>{cat}</p>)}
            <CardWitdget />

        </nav>
    )
}

export default NavBar;