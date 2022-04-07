import React from "react";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({title, price, image}){

    return(
        <div className="itemDetail">
            <div className="itemDetail__container">
                <img src={image}></img>
            </div>
            <div className="itemDetail__container">
                <span className="itemDetail__nombre">{title}</span>
                <span className="itemDetail__precio">Precio: ${price}</span>
                <span className="itemDetail__descripcion">Lo que tenés que saber de este producto: <br/>{"Sin descricpcion"}</span>
                <ItemCount stock={20}/>
            </div>
        </div>
    )

}

export default ItemDetail