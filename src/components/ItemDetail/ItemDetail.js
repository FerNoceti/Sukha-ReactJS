import React, {useState, useContext} from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer } from 'react-toastify';
import Message from "../Message/Message";
import { Link } from 'react-router-dom';
import CartContext from "../CartContext/CartContext";

function ItemDetail({id, title, price, image, stock, description}){

    const [show, setShow] = useState(false)

    const {addItem} = useContext(CartContext)

    const onAdd = (cant) => {
        show ? setShow(false) : setShow(true)
        addItem({id, title, price, image}, cant)
        Message({message: `se añadio al carrito: ${cant} unidad/es de: ${title}`, theme: "light"})
    }

    return(
        <div className="itemDetail">
            <div className="itemDetail__container">
                <img className="itemDetail__img" src={image} alt={`Imagen de ${title}`}></img>
            </div>
            <div className="itemDetail__container">
                <span className="itemDetail__nombre">{title}</span>
                <span className="itemDetail__precio">Precio: ${price}</span>
                <span className="itemDetail__descripcion">Lo que tenés que saber de este producto: <br/><br/>{description !== null ? description : 'No hay descripción'}</span>
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