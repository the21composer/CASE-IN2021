import React from "react";
import "./Card.css";

export default function Card(props) {

    return (
        <div className='card'>
        <div className='card-text'>
            {props.text}
        </div>
        <img className='card-logo' src={require(`./CardsLogos/${props.logo}.svg`)} alt = "Card logo"/>
    </div>);
}