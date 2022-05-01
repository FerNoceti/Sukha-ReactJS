import React from 'react'
import './Perifericos.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Perifericos() {
  return (
    <div className='perifericos'>
        <span className='perifericos__titulo'>Periféricos</span>
        <img src='https://i.imgur.com/yl0KpfW.png' alt='perifericos'/>
        <p className='perifericos__p'>Mejora tu experiencia con Periféricos de gama alta</p>
        <div className='perifericos__items'>
          <ItemListContainer title={'Periféricos'} categoryId={'perifericos'}/>
        </div>
    </div>
  )
}

export default Perifericos