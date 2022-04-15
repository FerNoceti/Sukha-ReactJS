import './ItemList.css'
import Item from '../Item/Item'
import React from 'react'

function ItemList({products}) {
  return (
    <div className='itemlist'>
        {products.map(element => <Item key={element.id} title={element.title} img={element.thumbnail} price={element.price} id={element.id}/>)}
    </div>
  )
}

export default ItemList
