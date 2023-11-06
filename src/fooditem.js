import React from "react";

export default function Fooditem(props){
    return (
        <div className="food">
        <img src={`./images/${props.item.img}`}/>
        <h3>{props.item.name}</h3>
        <p>Expiry: {props.item.expiry}</p>
        <p>Quantity: {props.item.quantity}</p>
        </div>

    )

}