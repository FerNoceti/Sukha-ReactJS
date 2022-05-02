import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import './CartWidget.css';
import CartContext from '../CartContext/CartContext';

function CartWidget() {

    const {totalItems} = useContext(CartContext);

    return (
		<div className='cartwidget'>
			<BsCart4 className='cart__icon'/>
			<span className='cart__number' id='cartNum'>{totalItems()}</span>
		</div>
	)
}

export default CartWidget