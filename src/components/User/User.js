import React, {useState, useContext} from "react";
import './User.css'
import UserContext from '../UserContext/UserContext'
import { Link } from "react-router-dom";

function User() {

    const { user, setUser } = useContext(UserContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return  <>{
        user !== null?
        <div className='user'>
            <span className='user__title'>Datos de usuario</span>
            <span className='user__info'>Nombre: {user.name}</span>
            <span className='user__info'>Mail: {user.email}</span>
            <span className='user__info'>Teléfono: {user.phone}</span>
            <button className='user__button' onClick={() => setUser(null)}>Cambiar usuario</button>
            <Link className='user__link' to={"/cart"}>Ver carrito</Link>
        </div>
        :
        <div className='user'>
            <span className='user__title'>Crear usuario</span>
            <input type='text' className='user__input' placeholder='Nombre' onChange={e => setName(e.target.value)}/>
            <input type='email' className='user__input' placeholder='Email'  onChange={e => setEmail(e.target.value)}/>
            <input type='tel' className='user__input' placeholder='Teléfono' onChange={e => setPhone(e.target.value)}/>
            <>
            {(name === '' || email === '' || phone === '')?
            <span className='user__info'>Completa todos los datos</span>
            :
            <button className='user__button' onClick={() => setUser({name, email, phone})}>Crear usuario</button>
            }
            </>
        </div>
    }
    </>
}

export default User;