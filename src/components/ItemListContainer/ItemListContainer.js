import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {getFirestore, collection, getDocs, query, where} from '../../firebase/firebase'

function ItemListContainer({title, buscar}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()

        const q = query(collection(db, 'items'), where("categoryId", "==", buscar));
        getDocs(q).then(docs => {
            if (docs.length === 0) {
                setLoading(false)
            } else {
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
        })
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