import React, { useState } from 'react'
import "./login"
import { useDispatch } from 'react-redux'
import { signup } from '../../Store/Slices/userAuthSlice';

const Signup = () => {
    const dispatch = useDispatch();
    const [signUPData,setSignUPData] = useState({
        email:"",
        password:""
    })
    const [ConfirmPassword,setConfirmPassword] = useState("");

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setSignUPData({...signUPData,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(signUPData.email,signUPData.password,ConfirmPassword)
        if(signUPData.password !== ConfirmPassword){
            alert("password do not match")
        }
        else{
            console.log(signUPData)
            dispatch(signup(signUPData))
        }
        
    }

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={signUPData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={signUPData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='c-password'>Confirm Password:</label>
                    <input
                        type="password"
                        name='c-password'
                        onChange={(e)=>setConfirmPassword(e.target.value)}                        
                        required
                    />
                </div>
                <button type="submit" className='login-btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup