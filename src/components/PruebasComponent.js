import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {

    const [usuario, SetUsuario] = useState("Fulanito");
    const [fecha, setFecha] = useState("01-01-1999");

    const modUsuario = e => {
        SetUsuario(e.target.value);
        console.log("Ha habido un cambio en usuario");
    }

    const cambiarFecha = e => {
        //setFecha(new Date().toLocaleDateString());
        setFecha(Date.now());
    }

    /*     
    useEffect(() => {
            console.log("USE EFFECT");
        }) 
    */

/*     //al pasar el array vacío solo se ejecuta una vez, al cargar
    useEffect(() => {
        console.log("USE EFFECT");
    }, []) */


    //solo se ejecuta al cambiar 
    useEffect(() => {
        console.log("USE EFFECT - Usuario cambiado");
    }, [usuario])



    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>

            <strong>{usuario}</strong>
            <br></br>

            <input type='text'
                onChange={modUsuario}
                placeholder='Cambia el nombre' />

            <br></br>
            <strong>{fecha}</strong>

            <br></br>
            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </div>
    )
}
