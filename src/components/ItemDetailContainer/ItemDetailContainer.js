import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {

    const params = useParams()
    
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch('encontrar código para buscar por id' + params.id)
            .then(res => {
                return res.json()
            }).then((res) =>{
                setProduct(res.results)
                console.log(res.results)
            })
    },[])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail/>
        </div>
    )
  }

export default ItemDetailContainer