import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export const Login = () => {
    const [email, setEmail] = useState('djnetswa@gmail.com')
    const [password, setPassword] = useState('12345678')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const API_URL = `${process.env.REACT_APP_API_URL}/auth/login`

        // Validar los datos
        const shemaCredentials = {email, password}
        
        try {
            const response = await fetch(API_URL, {headers:{ 'Content-Type': 'application/json' }, mode:'cors', type:'json', method: 'POST', body: JSON.stringify(shemaCredentials)})
        } catch (error) {
            console.error(error)
        }
    
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
            <h1>LOGIN</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input value={email} onChange={(e)=>{ setEmail(e.target.value) }} type="email" name="email" id="email" placeholder="Ingresa tu email..." />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input value={password} onChange={(e)=>{ setPassword(e.target.value) }} type="password" name="password" id="password" placeholder="Ingresa tu password..." />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </>
    )
}
