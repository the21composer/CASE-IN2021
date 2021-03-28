import React from "react";
import "./ChatRoom.css";
import Header from "../Header/Header";
import ListOfCards from "../ListOfCards/ListOfCards";
import ChatHistory from "./chatHistory";
import AutoTextArea from "./chatInput";

export default function ChatRoom(props) {

    return (<>
        <div className='chat-room-wrapper'>
            <Header text = "Чат с адаптером"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "chatRoom" className = 'list-of-cards'/>
            </div>
            <div className='chat-wrapper'>
                    <ChatHistory/>
                    <AutoTextArea/>
            </div>
        </div>
    </>);
}
