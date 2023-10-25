import cart from './assets/cart.svg'
import styles from '../styles.module.css'

const CardWitdget = () => {
    return (
        <div className={styles.cart}>
            <img className={styles.carrito} src={cart} alt="cardWidget" />
            <h4 className={styles.h4}>5</h4>
        </div>
    )
}
export default CardWitdget