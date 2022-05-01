import React, {useContext} from 'react'
import { BiUser } from 'react-icons/bi';
import "./UserWidget.css"
import UserContext from '../UserContext/UserContext'

function UserWidget() {

  const { user } = useContext(UserContext)

  return (
    <div className='userwidget'>
        <BiUser className='userwidget__icon'/>
        <>{user !== null ?
            <span className='userwidget__info'>Hola {user.name}!</span>
            :
            <span className='userwidget__text' id='userText'>Inicia tus datos</span>
      }</>
    </div>
  )
}

export default UserWidget