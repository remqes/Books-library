import { useState } from "react"
import { useNavigate } from "react-router"
import { registerUser } from "../services/authService"

const RegisterView = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await registerUser(user)
        setUser({
            username: '',
            email: '',
            password: ''
        })
        navigate('/')
    }

    return(
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className='form mt-5'>
            <h2>Rejestracja</h2>
            <input className='form-control' onChange={handleChange} name='username' value={user.username} type="text" placeholder='Podaj nazwę użytkownika' />
            <input className='form-control' onChange={handleChange} name='email' value={user.email} type="email" placeholder='Podaj email użytkownika' />
            <input className='form-control' onChange={handleChange} name='password' value={user.password} type="password" placeholder='Podaj hasło użytkownika' />
            <button className='btn btn-dark form-control'>Zaloguj się</button>
        </form>
        </div>
    )
}

export default RegisterView