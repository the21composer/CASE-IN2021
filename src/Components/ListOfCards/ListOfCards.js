import React from "react";
import "./ListOfCards.css";
import Card from "../Card/Card";
import {NavLink} from "react-router-dom";

export default function ListOfCards(props) {

    let superfluousCard = 0;

    //Определяем, какую карточку не нужно показывать

    switch (props.currentPage) {
        case "mainPage": superfluousCard = 0; break;
        case "chatBot": superfluousCard = 1; break;
        case "personalTasks": superfluousCard = 2; break;
        case "chatRoom": superfluousCard = 3; break;
        case "docs": superfluousCard = 4; break;
        case "personalArea": superfluousCard = 5; break;
    }

    //Создаем массив всех возможных карточек

    const arrayOfCards = [
        <NavLink className={'list-elem main-page'}
                 to='/mainPage' onClick={props.onclick}>
            <Card text = "Главная" logo = "mainPage"/>
        </NavLink>,
        <NavLink className={'list-elem chat-bot'}
                 to='/chatBot' onClick={props.onclick}>
            <Card text = "Чат-бот" logo = "chatBot"/>
        </NavLink>,
        <NavLink className={'list-elem personal-tasks'}
                 to='/yourTasks' onClick={props.onclick}>
            <Card text = "Ваши задачи" logo = "yourTasks"/>
        </NavLink>,
        <NavLink className={'list-elem chat-room'}
                 to='/chatRoom' onClick={props.onclick}>
            <Card text = "Адаптер" logo = "chatRoom"/>
        </NavLink>,
        <NavLink className={'list-elem docs'}
                 to='/documents' onClick={props.onclick}>
            <Card text = "Документы" logo = "documents"/>
        </NavLink>,
        <NavLink className={'list-elem personal-area'}
                 to='/personalArea' onClick={props.onclick}>
            <Card text = "Кабинет" logo = "personalArea"/>
        </NavLink>];

    //Удаляем одну лишнюю карточку

    arrayOfCards.splice(superfluousCard, 1);

    return (<>
        <div className='list-of-cards-frame'>
            {arrayOfCards}
        </div>
    </>);
}