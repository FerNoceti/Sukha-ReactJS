import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const params = useParams()
    const [product, setProduct] = useState(
        {title:'', price:'', pictures:[{url:''}] }
    )

    useEffect(() => {
        
    },[])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail id={product.id} title={product.title} price={product.price} image={product.pictures[0].url}/>
        </div>
    )

}

export default ItemDetailContainer