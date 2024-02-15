import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, SetUsuario] = useState("Fulanito");
    const [fecha, setFecha] = useState("01-01-1999");
    const [contador, setContador] = useState(0);

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


    //solo se ejecuta al cambiar usuario o fecha
    useEffect(() => {
        setContador(contador + 1);
        console.log(`USE EFFECT - Usuario o fecha cambiados ${contador} veces`);
    }, [usuario, fecha])



    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>

            <strong className={contador > 10 ? 'label label-green' : 'label'}>{usuario}</strong>

            <input type='text'
                onChange={modUsuario}
                placeholder='Cambia el nombre' />

            <br></br><br></br>

            <strong className={contador > 10 ? 'label label-green' : 'label'}>{fecha}</strong>

            <button onClick={cambiarFecha}>Cambiar fecha</button>

            {usuario == "Mengano" && <AvisoComponent />}

        </div>
    )
}
