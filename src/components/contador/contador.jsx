import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(1)
    
    const resta =() => {
        contador > 1 && setContador(contador - 1)
    }
    return(
        <>
            <button onClick={resta}>-</button>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>+</button>
        </>

    )
}

export default Contador