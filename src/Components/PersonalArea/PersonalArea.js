import React from "react";
import "./PersonalArea.css";
import Header from "../Header/Header";
import ListOfCards from "../ListOfCards/ListOfCards";


export default function PersonalArea(props) {

    return (<>
        <div className='personal-area-wrapper'>
            <Header text = "Личный кабинет"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "personalArea" className = 'list-of-cards'/>
            </div>
            <div className='personal-info-wrapper'>
                Это личный кабинет
            </div>
        </div>
    </>);
}