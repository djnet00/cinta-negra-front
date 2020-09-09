import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import RcIf, {RcElse} from 'rc-if'

export const Signup = () => {
    const [email, setEmail] = useState()
    const [nombre, setNombre] = useState()
    const [password, setPassword] = useState()
    const [userOk, setUserOk] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const API_URL = `${process.env.REACT_APP_API_URL}/auth/signup`

        // Validar los datos
        const shemaUser = {nombre, email, password}
        
        try {
            let response = await fetch(API_URL, {
                headers:{ 'Content-Type': 'application/json' }, 
                mode:'cors', type:'json', 
                method: 'POST', 
                body: JSON.stringify(shemaUser)
            })

            response = await response.json()
            if( response ) {
                setUserOk(true)
            }

        } catch (error) {
            console.error(error)
        }
    
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign-up</title>
            </Helmet>
            <h1>Signup</h1>

            <RcIf if={userOk === false} >
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email">Nombre</Label>
                        <Input value={nombre} onChange={(e)=>{ setNombre(e.target.value) }} type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input value={email} onChange={(e)=>{ setEmail(e.target.value) }} type="email" name="email" id="email" placeholder="Ingresa tu email..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input value={password} onChange={(e)=>{ setPassword(e.target.value) }} type="password" name="password" id="password" placeholder="Ingresa tu password..." />
                    </FormGroup>
                    <Button>Registrarse</Button>
                </Form>
                <RcElse>
                    <Redirect to="/login" />
                </RcElse>
            </RcIf>
        </div>
    )
}
