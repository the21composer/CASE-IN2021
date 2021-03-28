import React, {useEffect} from "react";
import {
    useLocation,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Login from "./Components/Login/Login";
import useToken from "./Components/Helpers/useToken";
import {helperRedirect, setHistory} from './Components/Helpers/Redirect';

import MainPage from "./Components/MainPage/MainPage";
import PersonalArea from "./Components/PersonalArea/PersonalArea";
import PersonalTasks from "./Components/PersonalTasks/PersonalTasks";
import ChatBot from "./Components/ChatBot/ChatBot";
import ChatRoom from "./Components/ChatPage/ChatRoom";
import Documents from "./Components/Docs/Documents";
import 'bootstrap/dist/css/bootstrap.min.css';

export const API_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? `${window.location.protocol}//${window.location.hostname}:3030/api/v1/` :
    `${window.location.protocol}//${window.location.host}/api/v1/`;

export default function App(){
    const {token, setToken} = useToken();

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '')
            helperRedirect('/mainPage');
    }, [location.pathname]);


    if (!token) {
        return (<Login setToken={setToken}/>);
    }

    return (
        <div className='App'>
            <div className='content-wrapper'>
                <Route component={HistorySetter}/>
                <Switch>
                    <Route path='/mainPage' component={() => <MainPage/>}/>
                    <Route path='/chatBot' component={() => <ChatBot/>}/>
                    <Route path='/yourTasks' component={() => <PersonalTasks/>}/>
                    <Route path='/chatRoom' component={() => <ChatRoom/>}/>
                    <Route path='/documents' component={() => <Documents/>}/>
                    <Route path='/personalArea' component={() => <PersonalArea/>}/>
                    <Route>
                        <Redirect to='/mainPage'/>
                </Route>
                </Switch>
            </div>
    </div>);
}

function HistorySetter({history}) {
    setHistory(history);
    return null;
}
