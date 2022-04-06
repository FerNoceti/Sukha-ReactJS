import './Item.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Item(props) {
  return (
    <div className='item'>
        <span className='item__title'>{props.title}</span>
        <img className='item__image' src={props.img} alt="img item"/>
        <span className='item__precio'>Precio: ${props.price}</span>
        <span className='item__stock'>Stock: {props.stock}</span>
        <Link to={`/product/${props.id}`}>Ver Detalles</Link>

    </div>
  )
}

export default Item