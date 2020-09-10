import React from 'react'
import { CardTarea, Titulo } from './index.styled'

export const Tarea = (props) => {
    return (
        <>
            <CardTarea>
                <Titulo>{ props.titutlo } <small>({ props._id })</small></Titulo>
                <h4>{ props.autor }</h4>
                <p>{ props.contenido }</p>
            </CardTarea>
        </>
    )
}
