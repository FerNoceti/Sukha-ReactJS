import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore, collection, getDocs, query, where, limit} from '../../firebase/firebase'

function ItemDetailContainer() {

    const params = useParams()
    const [product, setProduct] = useState(
        {title:'', price:'', pictures:[{url:''}] }
    )

    useEffect(() => {
        const db = getFirestore()

        const q = query(
            collection(db, 'items'),
            where("id", "==", request),
            limit(1)
        );
        getDocs(q).then(docs => {
            if (docs.length === 0) {
                setProduct(
                    {title:'', price:'', pictures:[{url:''}] }
                )
            } else {
                setProduct(snapshot.docs[0].data())
            }
        })
    },[])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail id={product.id} title={product.title} price={product.price} image={product.pictures[0].url}/>
        </div>
    )

}

export default ItemDetailContainer