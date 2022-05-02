import React, {useState, useContext} from "react";
import './User.css'
import UserContext from '../UserContext/UserContext'
import { Link } from "react-router-dom";

function User() {

    const { user, createUser, cleanUser } = useContext(UserContext)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('.')
    const [emailAuth, setEmailAuth] = useState(false)
    const emailAuthentication = (email) => {
        setEmail(email)
        RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(email) ? setEmailAuth(true) : setEmailAuth(false)
    }

    const [phone, setPhone] = useState('')

    return  <>{
        user !== null?
        <div className='user'>
            <span className='user__title'>Datos de usuario</span>
            <span className='user__info'>Nombre: {user.name}</span>
            <span className='user__info'>Apellido: {user.surname}</span>
            <span className='user__info'>Mail: {user.mail}</span>
            <span className='user__info'>Teléfono: {user.phone}</span>
            <button className='user__button' onClick={() => cleanUser()}>Cambiar usuario</button>
            <Link className='user__link' to={"/cart"}>Ver carrito</Link>
        </div>
        :
        <div className='user'>
            <span className='user__title'>Crear usuario</span>
            <span className='user__subtitle'>Ingresa los datos</span>
                <div className="user__resgister">
                    <input type='text' className='user__input' placeholder='Nombre' onChange={e => setName(e.target.value)}/>
                    <input type='text' className='user__input' placeholder='Apellido' onChange={e => setSurname(e.target.value)}/>
                    <input type='email' className='user__input' placeholder='Email'  onChange={e => emailAuthentication(e.target.value)}/>
                    <input type='email' className='user__input' placeholder='Validación Email'  onChange={e => setEmail2(e.target.value)}/>
                    <input type='tel' className='user__input' placeholder='Teléfono' onChange={e => setPhone(e.target.value)}/>
                </div>
            <>
            { name.length >= 3 && email === email2 && phone.length >= 6 && surname.length >= 3 ?
                <button className='user__button' onClick={() => createUser(name, surname, email, phone)}>Crear usuario</button>
                :
                <span className='user__info'>
                    <div className="user__info__title">Verifica que:</div>
                    <span style={name.length <=  3 ? {color: 'red'} : {color: 'green'}}>
                        {name.length <= 3 ? 'Ingresa un nombre mayor a 3 dígitos' : 'Nombre ingresado correctamente'}
                    </span>
                    <span style={surname.length <= 3 ? {color: 'red'} : {color: 'green'}}>
                        {surname.length <= 3 ? 'Ingresa un apellido mayor a 3 dígitos' : 'Apellido ingresado correctamente'}
                    </span>
                    <span style={email !== email2 ? {color: 'red'} : {color: 'green'}}>
                        {email !== email2 ? 'Emails distintos' : 'Emails coinciden'}
                    </span>
                    <span style={!emailAuth ? {color: 'red'} : {color: 'green'}}>
                        {!emailAuth ? 'Email ingresado incorrectamente' : 'Email validado'}
                    </span>
                    <span style={phone.length <= 5 ? {color: 'red'} : {color: 'green'}}>
                    {phone.length <= 5 ?
                    'Teléfono incorrecto (Ingrese 5 dígitos mínimo)' : 'Teléfono validado'}
                    </span>
                </span>
            }
            </>
        </div>
    }
    </>
}

export default User;