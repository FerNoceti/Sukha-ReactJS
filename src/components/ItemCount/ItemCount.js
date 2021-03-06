import React from 'react'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Message from '../Message/Message';
import 'react-toastify/dist/ReactToastify.css';
import './ItemCount.css'

function ItemCount({ initial = 0, stock, onAdd}) {

    const [count, setCount] = useState(initial)

    const increment = () => {count < stock ? setCount(count + 1) :Message({message: "No hay stock del producto", theme: 'light'})}
    const decrement = () => { count > 0 ? setCount(count - 1) : Message({message: "No puedes ingresar cantidades menores a 0", theme: 'light'})}




    return (
    <div className='itemcount'>
        <div className='itemcount__container'>
            <button onClick={decrement} className='itemcount__button'>-</button>
            <span className='itemcount__cantidad'>{count}</span>
            <button onClick={increment} className='itemcount__button'>+</button>
        </div>
        <div className='itemcount__container'>
            <button onClick={() => {onAdd(count);  setCount(0);}} className="itemcount__buttonAdd" disabled={count === 0}>Agregar al carrito</button>
            <ToastContainer position="bottom-right"/>
        </div>
    </div>
    )

}

export default ItemCount