import React, { useState } from 'react'
import Login from './login';
import Signup from './Signup';


const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="form-container">
            {isLogin ? (
                <Login />
            ) : (
                <Signup />
            )}
            <div className="toggle-button">
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
            </div>
        </div>
    )
}

export default Auth