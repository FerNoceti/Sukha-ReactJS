import React from 'react'
import { useContext } from 'react'
import CartContext from "../CartContext/CartContext"
import './CartItem.css'

function CartItem(props) {

    const {removeItem} = useContext(CartContext)

    return(
        <div className='cartitem'>
            <div className='cartitem__imgContainer'>
                <img className='cartitem__img' src={props.image} alt={`Imagen de ${props.title}`}></img>
            </div>
            <div className='cartitem__title'>
                {props.title}
            </div>
            <div className='cartitem__price'>
                Precio por unidad: ${props.price}
            </div>
            <div className='cartitem__quantity'>
                Cantidad: {props.quantity} u
            </div>
            <div className='cartitem__price'>
                Precio total: ${props.price * props.quantity}
            </div>
            <div className='cartitem__remove'>
                <button onClick={() => removeItem(props.id)}>
                    Eliminar del carrito
                </button>
            </div>
        </div>
    )
}

export default CartItem