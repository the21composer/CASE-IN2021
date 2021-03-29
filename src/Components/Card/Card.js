import React from "react";
import "./Card.css";

export default function Card(props) {

    return (
        <div className='card-link'>
        <div className='card-name'>
            {props.text}
        </div>
        <img className='card-logo' src={require(`./CardsLogos/${props.logo}.svg`)} alt = "Card logo"/>
    </div>);
}