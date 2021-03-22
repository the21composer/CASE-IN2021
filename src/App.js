import React, {useEffect} from "react";
import {
    useLocation,
    Switch,
    Route, Redirect
} from "react-router-dom";

export const API_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? `${window.location.protocol}//${window.location.hostname}:3030/api/v1/` :
    `${window.location.protocol}//${window.location.host}/api/v1/`;

export default function App(){
    return (<>
        <div>Проверка работы App</div>
    </>);
}

/*function HistorySetter({history}) {
    setHistory(history); //Прокидывем history в хэлпер
    return null;
}*/