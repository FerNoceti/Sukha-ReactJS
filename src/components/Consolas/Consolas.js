import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './Consolas.css'

function Consolas() {
  return (
    <div className='consolas'>
        <span className='consolas__titulo'>Consolas de Video Juego</span>
        <img src='https://i.imgur.com/RIafc2a.png' alt="Consolas"/>
        <p className='consolas__p'>Encontrá las últimas consolas aquí</p>
        <div className='consolas__items'>
          <ItemListContainer title={'Consolas de Video Juego'} categoryId={'consolas'}/>
        </div>
    </div>
  )
}

export default Consolas