import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';
import CartContext from "../CartContext/CartContext"
import { animateScroll as scroll} from 'react-scroll';

function ItemDetailContainer() {

    const params = useParams()
    const [product, setProduct] = useState({title: 'Cargando...', price: 0, image: 'Cargando...', stock: 0})

    const {cart} = useContext(CartContext)

    const cartStock = cart.find(item => item.id === params.id)?.quantity || 0

    useEffect(() => {

        scroll.scrollToTop({duration: 0})

        const docRef = doc(firestoreDb, 'items', params.id)

        getDoc(docRef).then(querySnapshot => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            product.stock -= cartStock
            setProduct(product)
        })

    },[])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail id={product.id} title={product.title} price={product.price} image={product.img} description={product.description} stock={product.stock}/>
        </div>
    )

}

export default ItemDetailContainer