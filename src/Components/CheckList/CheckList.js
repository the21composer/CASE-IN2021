import React, {useState} from "react";
import "./CheckList.css";
import {ProgressBar} from 'react-bootstrap';

export default function CheckList({percent}) {
    const [showMore, setShowMore] = useState(false);

    return (<>
        <div className={showMore? "check-list-tasks" : "check-list-task-short"}>
            <p className='check-list-heading'>Чек-лист</p>
            <p className='check-list-info'>«Добро пожаловать!»</p>
            <div className='tasks'>

            </div>
        </div>
        <div className={showMore? "check-list-progress" : "check-list-progress-short"}>
            <p className='progress-heading'>Ваш прогресс</p>
            <div>
                <ProgressBar now={percent}/>
                <p className='percentage'>{`${percent}%`}</p>
            </div>
            <p className='history-heading'>История:</p>
            <div className='history-tasks'>

            </div>
        </div>
        <div className='show-more'>
            <form>
                <button type='button' onClick={() => {setShowMore(!showMore)}}>{showMore? "Скрыть" : "Узнать больше"}</button>
            </form>
        </div>
    </>);
}