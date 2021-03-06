import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL
const jwtString = 'jwtlibrarytmp'

export const loginUser = async (userObj) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userObj)
    const {user, token} = response.data
    const {_id, ...userStored} = user
    localStorage.setItem(jwtString, JSON.stringify({user: userStored, token}))
    
    
    return response;
}

export const registerUser = async (userObj) => {
    const response = await axios.post(`${apiUrl}/auth/register`, userObj)
    return response
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (!localStorage.getItem(jwtString)) return false;
    const {user} = JSON.parse(localStorage.getItem(jwtString));
    if (user) {
        return user;
    } 
    return false;
    }

export const logout = () => {
    localStorage.removeItem(jwtString)
    window.location.reload()
}