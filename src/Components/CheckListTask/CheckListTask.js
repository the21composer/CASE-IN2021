import React from 'react';
import './CheckListTask.css';
import checked from './icons/checked_circle.png';
import unchecked from './icons/unchecked_circle.png';
import ReactTooltip from 'react-tooltip';

export default function CheckListTask(props) {

    //TODO: Добавить onclick для иконки ссылки - переход к элементу, где нужно выполнить действия

    return(<div className='task-in-check-list'>
        {
            props.type === "unchecked" ? <img className='check-task-icon' src={unchecked} alt = "Иконка невыполненного задания"/> :
            <img className='check-task-icon' src={checked} alt = "Иконка выполненного задания"/>
        }
            <div className='task-text'>{props.text}</div>
        {
            props.type === "unchecked" ? <img className='link-icon' src={require("./icons/link.svg")} data-tip = "Перейти"/> :
                <div className = "cost">{`${props.cost}%`}</div>
        }
        <ReactTooltip place = "right"/>
        </div>);
}
