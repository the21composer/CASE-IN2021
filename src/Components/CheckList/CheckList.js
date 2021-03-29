import React, {useState} from "react";
import "./CheckList.css";
import {ProgressBar} from 'react-bootstrap';
import CheckListTask from "../CheckListTask/CheckListTask";

export default function CheckList({percent}) {
    //TODO: добавить списки пройденных и непройденных заданий юзера из бд

    const [showMore, setShowMore] = useState(false);

    return (<>
        <div className={showMore? "check-list-tasks" : "check-list-task-short"}>
            <p className='check-list-heading'>Чек-лист</p>
            <p className='check-list-info'>«Добро пожаловать!»</p>
            <div className='tasks'>
                <CheckListTask type = "unchecked" text = "Познакомиться с чат-ботом"/>
                <CheckListTask type = "unchecked" text = "Ознакомиться с уставом компании"/>
            </div>
        </div>
        <div className={showMore? "check-list-progress" : "check-list-progress-short"}>
            <p className='progress-heading'>Ваш прогресс</p>
            <div className='progress-bar-div'>
                <ProgressBar variant="success" now={percent}/>
            </div>
            <p className='percentage'>{`${percent}%`}</p>
            <p className='history-heading'>История:</p>
            <div className='history-tasks'>
                <CheckListTask type = "checked" text = "Заполнить информацию о себе" cost = "5"/>
            </div>
        </div>
        <div className='show-more'>
            <form className='show-more-form'>
                <button className='show-more-button' type='button' onClick={() => {setShowMore(!showMore)}}>{showMore? "Скрыть" : "Узнать больше"}</button>
            </form>
        </div>
    </>);
}