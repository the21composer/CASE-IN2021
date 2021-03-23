import React from "react";
import "./MainPage.css";
import ListOfCards from "../ListOfCards/ListOfCards";
import CheckList from "../CheckList/CheckList";
import Header from "../Header/Header";


export default function MainPage(props) {

    //Поработать над новостями

    return (<>
        <div className='main-page-wrapper'>
            <Header text = "Здравствуйте, *Имя*!"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "mainPage" className = 'list-of-cards'/>
            </div>
            <div className='check-list-wrapper'>
                <CheckList percent = {50}/>
            </div>
            <div className='news-wrapper'>
                Новости
            </div>
        </div>
    </>);
}