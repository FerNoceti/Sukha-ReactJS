import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import UserWidget from '../UserWidget/UserWidget'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <a href='/' className='navbar__a'><img className='navbar__img' src='https://i.imgur.com/Nx7nbWd.png' alt='Inicio'/></a>
        <div className='navbar__categorias'>
            <Link className='navbar__categoria' to={"/equiposynotebooks"}>Notebooks</Link>
            <Link className='navbar__categoria' to={"/consolasdevideojuego"}>Consolas de Video Juego</Link>
            <Link className='navbar__categoria' to={"/perifericos"}>Periféricos</Link>
        </div>
        <div className='navbar__container'>
            <Link className='navbar__link' to={"/user"}><UserWidget/></Link>
            <Link className='navbar__categoria' to={"/cart"}><CartWidget/></Link>
        </div>
    </div>
  )
}

export default Navbar