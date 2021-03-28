import React, { useEffect } from "react";
import "./ListOfCards.css";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const arrayOfCards = [
    {
        className: 'main-page',
        to: '/mainPage',
        text: "Главная",
        logo: "mainPage"
    }, {
        className: 'chat-bot',
        to: '/chatBot',
        text: "Чат-бот",
        logo: "chatBot"
    }, {
        className: 'personal-tasks',
        to: '/yourTasks',
        text: "Ваши задачи",
        logo: "yourTasks"
    }, {
        className: 'chat-room',
        to: '/chatRoom',
        text: "Адаптер",
        logo: "chatRoom"
    }, {
        className: 'docs',
        to: '/documents',
        text: "Документы",
        logo: "documents"
    }, {
        className: 'personal-area',
        to: '/personalArea',
        text: "Кабинет",
        logo: "personalArea"
    }
];

export default function ListOfCards({ currentPage, onclick }) {

    //Определяем, какую карточку не нужно показывать
    const superfluousCard = [
        "mainPage",
        "chatBot",
        "personalTasks",
        "chatRoom",
        "docs",
        "personalArea"].findIndex(i => i === currentPage);


    return (<>
        <div className='list-of-cards-frame'>
            {arrayOfCards.filter((_, i) => i !== superfluousCard).map(card => (
                <NavLink className={`list-elem ${card.classname}`}
                    to={card.to} onClick={onclick}>
                    <Card text={card.text} logo={card.logo} />
                </NavLink>
            ))}
        </div>
    </>);
}