import React, {useState, useContext} from "react";
import './User.css'
import UserContext from '../UserContext/UserContext'
import { Link } from "react-router-dom";

function User() {

    const { user, setUser } = useContext(UserContext)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name2, setName2] = useState('.')
    const [surname2, setSurname2] = useState('.')
    const [email2, setEmail2] = useState('.')
    const [phone2, setPhone2] = useState('.')

    return  <>{
        user !== null?
        <div className='user'>
            <span className='user__title'>Datos de usuario</span>
            <span className='user__info'>Nombre: {user.name}</span>
            <span className='user__info'>Apellido: {user.surname}</span>
            <span className='user__info'>Mail: {user.email}</span>
            <span className='user__info'>Teléfono: {user.phone}</span>
            <button className='user__button' onClick={() => setUser(null)}>Cambiar usuario</button>
            <Link className='user__link' to={"/cart"}>Ver carrito</Link>
        </div>
        :
        <div className='user'>
            <span className='user__title'>Crear usuario</span>
            <div className="user__container">
                <div className="user__resgister">
                <span className='user__subtitle'>Ingresa los datos</span>
                    <input type='text' className='user__input' placeholder='Nombre' onChange={e => setName(e.target.value)}/>
                    <input type='text' className='user__input' placeholder='Apellido' onChange={e => setSurname(e.target.value)}/>
                    <input type='email' className='user__input' placeholder='Email'  onChange={e => setEmail(e.target.value)}/>
                    <input type='tel' className='user__input' placeholder='Teléfono' onChange={e => setPhone(e.target.value)}/>
                </div>
                <div className="user__resgister">
                    <span className='user__subtitle'>Valida los datos</span>
                    <input type='text' className='user__input' placeholder='Nombre' onChange={e => setName2(e.target.value)}/>
                    <input type='text' className='user__input' placeholder='Apellido' onChange={e => setSurname2(e.target.value)}/>
                    <input type='email' className='user__input' placeholder='Email'  onChange={e => setEmail2(e.target.value)}/>
                    <input type='tel' className='user__input' placeholder='Teléfono' onChange={e => setPhone2(e.target.value)}/>
                </div>
            </div>
            <>
            {name === name2 && email === email2 && phone === phone2 && surname === surname2 ?
                <button className='user__button' onClick={() => setUser({name, surname,email, phone})}>Crear usuario</button>
                :
                <span className='user__info'>
                    <div className="user__info__title">Ingresa los datos:</div>
                    <span style={name !== name2 ? {color: 'red'} : {color: 'green'}}>
                        {name !== name2 ? 'Nombres distintos o no ingresados' : 'Nombres coinciden'}
                    </span>
                    <span style={surname !== surname2 ? {color: 'red'} : {color: 'green'}}>
                        {surname !== surname2 ? 'Apellidos distintos o no ingresados' : 'Apellidos coinciden'}
                    </span>
                    <span style={email !== email2 ? {color: 'red'} : {color: 'green'}}>
                        {email !== email2 ? 'Emails distintos o no ingresados' : 'Emails coinciden y están validados'}
                    </span>
                    <span style={phone !== phone2 ? {color: 'red'} : {color: 'green'}}>
                    {phone !== phone2 ? 'Teléfonos distintos o no ingresados' : 'Teléfonos coinciden y están validados'}
                    </span>
                </span>
            }
            </>
        </div>
    }
    </>
}

export default User;