import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './Notebooks.css'

function Consolas() {
  return (
    <div className='notebook'>
        <span className='notebook__titulo'>Notebooks</span>
        <img src='https://i.imgur.com/i5k1COb.png' alt="Notebooks"/>
        <p className='notebook__p'>Encontrá las últimas Notebooks</p>
        <ItemListContainer title={'Equipos y Notebooks'} buscar={'computadoras%20notebooks'}/>
    </div>
  )
}

export default Consolas