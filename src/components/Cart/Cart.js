import React, { useContext, useState } from 'react'
import CartContext from "../CartContext/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'
import { addDoc, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import Confetti from 'react-confetti'
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../UserContext/UserContext'
import { animateScroll as scroll} from 'react-scroll';

function Cart(){

    const { cart, clear, totalItems, totalPrice } = useContext(CartContext)

    const [orderState, setOrderState] = useState(false)

    const createOrder = () => {

        const objOrder = {
            buyer: user,
            cart: cart,
            totalPrice: totalPrice(),
            totalItems: totalItems(),
            date: new Date(),
        }

        const collectionRef = collection(firestoreDb, 'orders')
        addDoc(collectionRef, objOrder)
                .then(() => {
                    setOrderState(true)
                    toast(`Orden de compra confirmada.\nLimpiando carrito...`, {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        type: 'succes',
                        theme: "light"
                        })
                })
                .catch(() => {
                    toast(`Error al procesar la compra, intente de luego mas tarde`, {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        type: 'succes',
                        theme: "light"
                        })
                }
                )
                .finally(() => {
                    setTimeout(() => {
                        clear()
                        scroll.scrollToTop({duration: 0})
                    }, 5000)
                })
    }

    const { user } = useContext(UserContext)

    return<> { cart.length > 0 ?
        <div className='cart'>
            <span className='cart__title'>Carrito</span>
            <div className='cart__list'>
                {cart.map(element => <CartItem key={element.id} id={element.id} title={element.title} quantity={element.quantity} price={element.price}  image={element.image}/>)}
            </div>
            <div className='cart__total'>
                <div className='cart__totalItems'>
                    <span>Total de items: {totalItems()}</span>
                </div>
                <div className='cart__totalPrice'>
                    <span>Total: ${totalPrice()}</span>
                </div>
            </div>
            <div className='cart__buttons'>
                <button className='cart__button' onClick={clear}>
                    Vaciar carrito
                </button>
                <>
                {user !== null ?
                    <button className='cart__button' onClick={createOrder}>
                    Confirmar pedido
                    </button>
                    :
                    <div className='cart__info'>
                        <span className='cart__text'><Link to='/user' className='cart__link'>Crea un usuario</Link> para confirmar tu pedido</span>
                    </div>
            }
                </>
            </div>
            <ToastContainer position="top-right"/>
            <Confetti run={orderState} colors={["#2657B4ff", "#eee", "#0741ACff", "rgb(13, 42, 97)"]}/>
        </div>
        :
        <div className='cart__empty'>
            <span className='cart__empty__title'>Carrito vacio</span>
            <span className='cart__empty__text'>Agrega productos al carrito para ver su contenido</span>
            <Link className='cart__empty__link' to='/'>Ir a la tienda</Link>
        </div>
    }
    </>
}

export default Cart