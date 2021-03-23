import React from "react";
import "./PersonalTasks.css";
import Header from "../Header/Header";
import ListOfCards from "../ListOfCards/ListOfCards";


export default function PersonalTasks(props) {

    return (<>
        <div className='personal-tasks-wrapper'>
            <Header text = "Ваши задачи"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "personalTasks" className = 'list-of-cards'/>
            </div>
            <div className='tasks-wrapper'>
                Это ваши задачи
            </div>
        </div>
    </>);
}