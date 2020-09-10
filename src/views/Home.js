import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { AuthContext } from '../contexts/AuthContext'

export const Home = () => {

    const { isAuth } = useContext(AuthContext)

    if( isAuth ) {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Inicio Usuario</title>
                </Helmet>
                <h1>Ya estoy logueado</h1>
            </div>
        )
    }else {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Inicio Guest</title>
                </Helmet>
                <h1>No estoy logueado</h1>
            </div>
        )
    }
}
