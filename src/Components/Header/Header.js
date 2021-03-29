import React from 'react';
import './Header.css';
import useToken from "../Helpers/useToken";

export default function Header(props) {

    const {token, setToken} = useToken();

    function exit() {
        setToken(null);
    }


    return(<div className='header-wrapper'>
        <div className='header-text'>{props.text}</div>
        <form className='exit-button-form'>
            <button className='exit-button' onClick={() => {exit()}}>Выход</button>
        </form>
    </div>);
}