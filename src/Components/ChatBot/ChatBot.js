import React from "react";
import "./ChatBot.css";
import Header from "../Header/Header";
import ListOfCards from "../ListOfCards/ListOfCards";


export default function ChatBot(props) {

    return (<>
        <div className='chat-bot-wrapper'>
            <Header text = "Чат-бот помощник"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "chatBot" className = 'list-of-cards'/>
            </div>
            <div className='chat-with-bot-wrapper'>
                Это чат-бот
            </div>
        </div>
    </>);
}