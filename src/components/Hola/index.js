import './index.css'

import React from 'react';

/**
 * 
 * @param {*} props 
 */
export const Hola = (props) => {
    return (
        <div>
            <h1 className='titulo'>HOLA {props.nombre}</h1>
        </div>
    )
}

/*
export const Hola = ( { nombre } ) => {
    return (
        <div>
            <h1>HOLA {nombre}</h1>
        </div>
    )
}
*/
// rafc: genera estructura automaticamente
// export default Hola
