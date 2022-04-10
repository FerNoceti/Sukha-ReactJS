import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'


function ItemDetail({title, price, image}){
    const stock = parseInt(Math.random() * 100 + 1)
    const [show, setShow] = useState(false)

    const onAdd = (cant) => {
        show ? setShow(false) : setShow(true)
        toast(`se añadio al carrito: ${cant} unidad/es de: ${title}`, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: 'succes',
            theme: "light"
            })
    }

    return(
        <div className="itemDetail">
            <div className="itemDetail__container">
                <img className="itemDetail__img" src={image}></img>
            </div>
            <div className="itemDetail__container">
                <span className="itemDetail__nombre">{title}</span>
                <span className="itemDetail__precio">Precio: ${price}</span>
                <span className="itemDetail__descripcion">Lo que tenés que saber de este producto: <br/>{"Sin descricpcion"}</span>
                <span className="itemDetail__stock">Stock: {stock}</span>
                <div hidden={show} className="itemDetail__count"><ItemCount stock={stock} onAdd={onAdd}/></div>
                <Link hidden={!show} className="itemdetail__button" to={"/cart"}>Terminar mi compra</Link>            
            </div>
            <ToastContainer position="top-right"/>
        </div>
    )

}

export default ItemDetail