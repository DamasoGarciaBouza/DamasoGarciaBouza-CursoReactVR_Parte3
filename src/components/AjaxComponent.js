import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);

  const [cargando, setCargando] = useState(true);

  const [errores, setErrores] = useState("");

  //GENERICO
  /*   const getUsuariosEstaticos = () => {
      setUsuarios([
        {
          'id': 1,
          'email': "miguel.lacambra@mail.com",
          'first_name': "Miguel",
          'last_name': "Lacambra",
          'avatar': "https://reqres.in/img/faces/7-image.jpg",
        }
      ])
    } */

  /*   const getUsuariosAjaxPms = () => {
      fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json())
        .then(
          resultado_final => {
            setUsuarios(resultado_final.data);
          },
          error => {
            console.log(error);
          })
    } */

  const getUsuariosAjaxAsyncAwait = async () => {

    setTimeout(async () => {
      try {
        const peticion = await fetch('https://reqres.in/api/users?page=1');
        const { data } = await peticion.json();
        console.log(data);
        setUsuarios(data);
        setCargando(false);
      }
      catch (error) {
        console.log("Error:", error.message);
        setErrores(error.message);
      }

    }, 2000);


  }

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAsyncAwait();
  }, [])

  if (errores !== "") {
    //Cuando hay algún error
    return (
      <div className='error'>
        <br></br><br></br>
        Hay errores: {errores}
      </div>
    );
  }
  else if (cargando) {
    //Cuando todo esta cargando
    return (
      <div className='cargando'>
        <br></br><br></br>
        Cargando datos...
      </div>
    )
  }
  else if (!cargando && errores === "")
    //Cuando todo ha ido bien
    return (

      <div>
        <br></br><br></br>
        <h2>Listado usuarios ajax</h2>
        <ol className='usuarios'>
          {
            usuarios.map(usuario => {
              return <li key={usuario.id}>
                <img src={usuario.avatar} width="20" alt="avatar" />
                &nbsp;
                {usuario.first_name} {usuario.last_name}
              </li>
            })
          }
        </ol>
      </div>
    )
}
