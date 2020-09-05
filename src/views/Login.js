import React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from '../components/Container'

export const Login = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
            <h1>Login</h1>
            <Container />
        </div>
    )
}
