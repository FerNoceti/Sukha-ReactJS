import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {

    const params = useParams()
    const [product, setProduct] = useState()
    
    const request = 'https://api.mercadolibre.com/items/' + params.id

    useEffect(() => {
        fetch(request)
            .then(res => {
                return res.json()
            }).then((res) =>{
                setProduct(res)
            })
    },[])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail title={product.title} price={product.price} image={product.pictures[0].url}/>
        </div>
    )
  }

export default ItemDetailContainer