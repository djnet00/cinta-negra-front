import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import { AuthContext } from '../contexts/AuthContext'

import { Tarea } from '../components/Tareas'

export const Tareas = () => {

    const { isAuth, user } = useContext(AuthContext)
    const [tareas, setTareas] = useState([])
    const API_URL = process.env.REACT_APP_API_URL

    useEffect( () => {
        const getTareas = async () => {
            try {
                const resTareas = await axios.get(`${API_URL}/usuarios/${user._id}/tareas`,
                    {
                        headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('APP_TASKS_TOKEN')}`
                        }
                    }
                )

                setTareas(resTareas.data.response)
            } catch (error) {
                console.log(error)
            }
        }

        getTareas()
    },[isAuth])

    return (
        <>  
            {  !localStorage.getItem('APP_TASKS_TOKEN') && <Redirect to="login" />  }
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tareas de Usuario</title>
            </Helmet>
            { tareas.length === 0 && <p>No hay tareas.</p> }
            <Container>
                <Row>
                    { 
                        tareas.map( tarea => <Col sm={6} md={4} className="text-center"><Tarea {...tarea} /></Col>) 
                    }
                </Row>
            </Container>
        </>
    )
}
