import React, {useContext, useState, useEffect} from 'react'
import CartContext from "../CartContext/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

function Cart(){

    const {cart, clear, totalItems, totalPrice} = useContext(CartContext)

    const [orders, setOrders] = useState([])
    useEffect(() => {
        const ordesCollection = (collection(firestoreDb, 'orders'))
        getDocs(ordesCollection).then(docs => {
            if (docs.size > 0) {
                setOrders(docs.docs)
                console.log(orders)
            }
            else {
                setOrders([])
            }
        })
    }, [])

    const createOrder = () => {

        const objOrder = {
            buyer: {
                name: 'test',
                email: 'test@test.com',
                phone: '123456789',
            },
            cart: cart,
            totalPrice: totalPrice(),
            totalItems: totalItems(),
            date: new Date(),
        }

        const collectionRef = collection(firestoreDb, 'orders')
        addDoc(collectionRef, objOrder)
                .then((response) => {
                    console.log('orden creada')
                    console.log(objOrder)
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                }
                )
                .finally(() => {
                    clear()
                })
    }


    return <> { cart.length > 0 ?
        <div className='cart'>
            <span className='cart__title'>Carrito</span>
            <div className='cart__list'>
                {cart.map(element => <CartItem key={element.id} id={element.id} title={element.title} quantity={element.quantity} price={element.price}  image={element.image}/>)}
            </div>
            <div className='cart__totalItems'>
                <span>Total de items: {totalItems()}</span>
            </div>
            <div className='cart__totalPrice'>
                <span>Total: ${totalPrice()}</span>
            </div>
            <button className='cart__button' onClick={clear}>
                Vaciar carrito
            </button>
            <button className='cart__button' onClick={createOrder}>
                Confirmar pedido
            </button>
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