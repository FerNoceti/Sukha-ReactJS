import React from 'react'
import { BiUser } from 'react-icons/bi';
import "./UserWidget.css"

function UserWidget() {
  return (
    <div className='user'>
        <BiUser className='user__icon'/>
        <span className='user__text' id='userText'>Inicia sesión</span>
    </div>
  )
}

export default UserWidget