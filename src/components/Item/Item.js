import './Item.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Item(props) {
  return (
    <div className='item'>
        <div className='item__container__img'>
            <img className='item__image' src={props.img} alt="img item"/>
        </div>
        <div className='item__container__datos'>
            <span className='item__title'>{props.title}</span>
            <span className='item__precio'>Precio: ${props.price}</span>
        </div>
        <div className='item__container__link'>
          <Link to={`/product/${props.id}`} className='item__link'>Ver Detalles</Link>
        </div>
    </div>
  )
}

export default Item