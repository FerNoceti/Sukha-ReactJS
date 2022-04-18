import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {useState, useContext} from "react"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import CartContext from "../CartContext/CartContext"

function ItemDetail({id, title, price, image}){

    const stock = parseInt(Math.random() * 100 + 1)
    const [show, setShow] = useState(false)

    const {addItem} = useContext(CartContext)

    const onAdd = (cant) => {
        show ? setShow(false) : setShow(true)
        addItem({id, title, price, image}, cant)
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
                <img className="itemDetail__img" src={image} alt={`Imagen de ${title}`}></img>
            </div>
            <div className="itemDetail__container">
                <span className="itemDetail__nombre">{title}</span>
                <span className="itemDetail__precio">Precio: ${price}</span>
                <span className="itemDetail__descripcion">Lo que tenés que saber de este producto: <br/>{"Sin descricpcion"}</span>
                <span className="itemDetail__stock">Stock: {stock}</span>
                <div hidden={show} className="itemDetail__count"><ItemCount stock={stock} onAdd={onAdd}/></div>
                <Link className="itemdetail__button" to="/">Volver al inicio</Link>
                <Link hidden={!show} className="itemdetail__button" to={"/cart"}>Ir al carrito</Link>
            </div>
            <ToastContainer position="top-right"/>
        </div>
    )

}

export default ItemDetail