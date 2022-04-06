import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemCount.css'

function ItemCount({ initial = 0, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const increment = () => {count < stock ? setCount(count + 1) : notificar("No hay stock del producto")}
    const decrement = () => { count > 0 ? setCount(count - 1) : notificar("No puedes ingresar cantidades menores a 0")}
    
    function notificar(texto){
        toast(texto, {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: 'warning',
            theme: "dark"
            })
    }

    return (
    <div className='itemcount'>
        <div className='itemcount__container'>
            <button onClick={decrement} className='itemcount__button'>-</button>
            <span className='itemcount__cantidad'>{count}</span>
            <button onClick={increment} className='itemcount__button'>+</button>
        </div>
        <div className='itemcount__container'>
            <button onClick={onAdd} className="itemcount__buttonAdd" disabled={count === 0}>Agregar al carrito</button>
            <ToastContainer position="bottom-right"/>
        </div>
    </div>
    )

}

export default ItemCount