import React from 'react';

export default function Header(props) {

    return(<div className='header-wrapper'>
        <div className='header-text'>{props.text}</div>
        <form className='exit-button-form'>
            <button className='exit-button'>Выход</button>
        </form>
    </div>);
}