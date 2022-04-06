import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({title, buscar}) {

    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + buscar)
            .then(res => {
                return res.json()
            }).then((res) =>{
                setProducts(res.results)
            })
    },[])

    return (
        <div className='itemListContainer'>
            <span className='itemListContainer__titulo'>{title}</span>
            <ItemList products={products}/>
        </div>
    )
  }

export default ItemListContainer