import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        alert("Componente aviso montado");
        console.log('Componente aviso montado');
        return () => {
            alert("Componente aviso desmontado");
        }
    },[])

    return (
        <div>
            <h4>Hola Menganito</h4>
            <h5>¿Estás bien?</h5>
            <button onClick={e => alert("Excelente")}>Sí</button>
            &nbsp;
            <button onClick={e => alert("Vaya...")}>No</button>
        </div>
    )
}

