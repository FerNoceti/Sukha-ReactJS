import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import { animateScroll as scroll} from 'react-scroll';

function ItemListContainer({title, categoryId}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        scroll.scrollToTop({duration: 0})
        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'items'), where('categoryId', '==', categoryId))
        : collection(firestoreDb, 'items')

        getDocs(collectionRef)
            .then(querySnapshot => {
                const products = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }
                )
                products.length === 0 ? setProducts([{title:'No hay productos', price: 0}]) : setProducts(products)
            }
        )
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [])

    return <>
    {
        loading ?
            <div className='cargando'>
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            </div>
            :
            <div className='itemListContainer'>
                <span className='itemListContainer__titulo'>{title}</span>
                <ItemList products={products}/>
            </div>
    }
    </>
}

export default ItemListContainer