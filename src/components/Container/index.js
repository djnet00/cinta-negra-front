import React, { useEffect, useState } from 'react'

const URL = 'https://pokeapi.co/api/v2/pokemon'

export const Container = () => {
    // const [ datosPeticion, setDatosPeticion ] = useState({})
    const [ datosAPI, setDatosAPI ] = useState({})

    useEffect( () => {
        fetch(URL)
        .then(result => result.json())
        .then(data => setDatosAPI(data.results) )
        .catch(err => console.error(err))

        //const req = await fetch(URL)
        //const res = await req.json()
        //setDatosAPI(res)
        
        // setDatosPeticion({"nombre": "Julian"})
    },[])

    return (
        <div>
            <ul>
                {
                    datosAPI.results?.map( e => <li key={e.name}>{ e.name }</li>)
                }
            </ul>
        </div>
    )
}
