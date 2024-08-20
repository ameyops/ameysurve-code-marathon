import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/useContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'
export const Login = () => {
    const { isAuthenticated, login, setUsernameglobal } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   

    const nav = useNavigate();
    const User = 'amey';
    const Pass = 'amey';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === User && password === Pass) {
            setUsernameglobal(username);
            login();
            console.log("right")
            nav("/home")
        } else {
            alert('Invalid username or password');
        }
    }

    return (
        <div className="login-form">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="heading">Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="username-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="username-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}

export default Login;
