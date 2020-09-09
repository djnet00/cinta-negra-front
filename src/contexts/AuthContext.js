import React, { createContext, useState, useEffect } from 'react'
import decode from 'jwt-decode'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})

    const loginUser = (token) => {
        localStorage.setItem('APP_TASKS_TOKEN', token)

        const decoded = decode(token)
        setUser(decoded)
        setIsAuth(true)
    }

    const logoutUser = () => {
        localStorage.removeItem('APP_TASKS_TOKEN')

        setUser({})
        setIsAuth(false)
    }

    useEffect( () => {
        const token = localStorage.getItem('APP_TASKS_TOKEN')

        if(token) {
            const decoded = decode(token)
            setUser(decoded)
            setIsAuth(true)
        }
    },[])

    return (
        <AuthContext.Provider value={ {isAuth, user, loginUser, logoutUser} }>
            { props.children }
        </AuthContext.Provider>
    )
}