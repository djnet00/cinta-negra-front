import React, { useEffect, useState } from 'react'

const URL = 'https://pokeapi.co/api/v2/pokemon'

export const Container = () => {
    const [ datosPeticion, setDatosPeticion ] = useState({
        
    })

    useEffect(() => {
        setDatosPeticion({"nombre": "Julian"})
    },[])

    return (
        <div>
            <h2>{ JSON.stringify(datosPeticion) }</h2>
        </div>
    )
}
