import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import { useContext } from 'react';
import './CartWidget.css';
import CartContext from '../CartContext/CartContext';

function CartWidget() {

  const {cart, totalItems} = useContext(CartContext);
  let number = totalItems();
  return <>
  {
  cart.length > 0 &&
  <div className='cartwidget'>
        <BsCart4 className='cart__icon'/>
        <span className='cart__number' id='cartNum'>{number}</span>
  </div>
  }
  </>
}

export default CartWidget