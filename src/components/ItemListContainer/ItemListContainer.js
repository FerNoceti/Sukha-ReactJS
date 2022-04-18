import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({title, buscar}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + buscar)
            .then(res => {
                return res.json()
            }).then((res) =>{
                setProducts(res.results)
            }).then(() => {
                setLoading(false)
                window.scrollTo(0, 0)
            })
    },[])

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