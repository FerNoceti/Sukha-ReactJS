import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import './CartWidget.css';

function CartWidget() {
  return (
    <div className='cart'>
        <BsCart4 className='cart__icon'/>
        <span className='cart__number' id='cartNum'>0</span>
    </div>

  )
}

export default CartWidget