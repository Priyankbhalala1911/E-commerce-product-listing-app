import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../Store/Slices/userAuthSlice'
import { useNavigate } from 'react-router'

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    return (
        <>
            <button type="submit" className='logout-btn' onClick={() => {
                dispatch(logOut())
                navigate("../")
            }}>Logout</button>
        </>
    )
}

export default Logout