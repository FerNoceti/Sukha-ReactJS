import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';

function ItemListContainer({title, buscar}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionRef = collection(firestoreDb, 'items')

        getDocs(collectionRef)
            .then(querySnapshot => {
                const products = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }
                )
                setProducts(products)
                setLoading(false)
            }
        )

    }, [])

    return <>
    {
        loading ?
            <div className='cargando'>Cargando...</div>
            :
            <div className='itemListContainer'>
                <span className='itemListContainer__titulo'>{title}</span>
                <ItemList products={products}/>
            </div>
    }
    </>
}

export default ItemListContainer