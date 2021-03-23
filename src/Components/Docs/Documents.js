import React from "react";
import "./Documents.css";
import Header from "../Header/Header";
import ListOfCards from "../ListOfCards/ListOfCards";
import DocsCard from "../DocsCard/DocsCard";


export default function Documents(props) {

    return (<>
        <div className='documents-wrapper'>
            <Header text = "Документы"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "docs" className = 'list-of-cards'/>
            </div>
            <div className='documents-info-wrapper'>
                <DocsCard name = "Устав компании"/>
                <DocsCard name = "Правила компании"/>
                <DocsCard name = "Распорядок дня"/>
            </div>
        </div>
    </>);
}