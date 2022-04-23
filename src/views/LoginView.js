import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../services/authService';

export default function LoginView(){
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const handleChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await loginUser(user)
        console.log(response.data)
        setUser({
            username: "",
            password: ""
        })
        navigate('/')
        window.location.reload()
    }

    return(
        <form onSubmit={handleSubmit} className='form mt-5'>
            <h2>Logowanie</h2>
            <input className='form-control' onChange={handleChange} name='username' value={user.username} type="text" placeholder='Podaj nazwę użytkownika' />
            <input className='form-control' onChange={handleChange} name='password' value={user.password} type="password" placeholder='Podaj hasło użytkownika' />
            <button className='btn btn-dark form-control'>Zaloguj się</button>
        </form>
    )
};
