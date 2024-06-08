import React, { useState } from 'react'
import "./login.css"
import { useDispatch } from 'react-redux';
import { login } from '../../Store/Slices/userAuthSlice';

const Login = () => {
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(loginData))
        console.log(loginData)
    }

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={loginData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className='login-btn'>Login</button>
            </form>
        </div>
    )
}

export default Login