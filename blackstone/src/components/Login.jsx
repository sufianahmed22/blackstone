import React, { useState } from 'react';
import mockUsers from '../mockUser.json'; // Ensure this file exists and has the correct data structure
import '../login.css'; // Importing the styles

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Check the mock data for matching credentials
        const user = mockUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            onLogin(user.role, username); // Pass the role and username for role-based redirection
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
       <div className='body1'>
         <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2 className="login-title">Blackstone Central Login</h2>
                <input
                    type="text"
                    className="login-input"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-btn">Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
       </div>
    );
};

export default Login;
