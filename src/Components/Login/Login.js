import React, { useState } from "react";
import "./Login.css";
import { uuid } from "../Helpers/uuid";
import {func} from "prop-types";

const Login = ({setToken}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLoginInput = (event) => {
        setLogin(event.target.value);
    }


    const handlePasswordInput = (event) => {
        setPassword(event.target.current);
    }


    const handleRememberClick = () => {
        setRemember(v => !v);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO Add real login
        setToken({ token: uuid() });
    }

    return (
        <div className="Login--container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required
                onChange={handleLoginInput} />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required
                onChange={handlePasswordInput} />
            <button type="submit" onClick={handleSubmit}>Login</button>
            <div>
                <label className="Login--label-remember">Remember me</label>
                <input className="Login--remember" type="checkbox" checked={remember} name="remember" onChange={handleRememberClick} />
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: func.isRequired
}

export default Login;

