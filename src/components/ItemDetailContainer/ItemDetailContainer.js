import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { firestoreDb} from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

function ItemDetailContainer() {

    const params = useParams()
    const [product, setProduct] = useState(
        {title:'', price:'', pictures:[{url:''}] }
    )

    useEffect(() => {

        const docRef = doc(firestoreDb, 'items', params.id)

        getDoc(docRef).then(querySnapshot => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
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