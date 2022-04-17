import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import { useContext } from 'react';
import './CartWidget.css';
import CartContext from '../CartContext/CartContext';

function CartWidget() {

  const {cart} = useContext(CartContext);

  return (
    <div className='cartwidget'>
        <BsCart4 className='cart__icon'/>
        <span className='cart__number' id='cartNum'>{cart.length}</span>
    </div>

  )
}

export default CartWidget