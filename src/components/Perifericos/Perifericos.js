import React from 'react'
import './Perifericos.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Perifericos() {
  return (
    <div className='perifericos'>
        <span className='perifericos__titulo'>Periféricos</span>
        <img src='https://i.imgur.com/yl0KpfW.png'/>
        <p className='perifericos__p'>Mejora tu experiencia con Periféricos de gama alta</p>
        <ItemListContainer title={'Periféricos'} categoryId={'perifericos'}/>
    </div>
  )
}

export default Perifericos