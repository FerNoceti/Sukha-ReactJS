import React from 'react'
import { useContext } from 'react'
import CartContext from "../CartContext/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart(){

    const {cart, clear} = useContext(CartContext)

    return <> { cart.length > 0 ?
        <div className='cart'>
            <span className='cart__title'>Carrito</span>
            <div className='cart__list'>
                {cart.map(element => <CartItem key={element.id} id={element.id} title={element.title} quantity={element.quantity} price={element.price}  image={element.image}/>)}
            </div>
            <button className='cart__clear' onClick={clear}>
                Vaciar carrito
            </button>
        </div>
      :
      <div className='cart__empty'>
          <span className='cart__empty__title'>Carrito vacio</span>
          <span className='cart__empty__text'>Agrega productos al carrito para ver su contenido</span>
          <Link className='cart__empty__link' to='/'>Ir a la tienda</Link>
      </div>
}
    </>
}

export default Cart