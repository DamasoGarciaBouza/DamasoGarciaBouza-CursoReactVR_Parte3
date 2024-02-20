import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);

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
    const peticion = await fetch('https://reqres.in/api/users?page=1');
    const {data} = await peticion.json();
    console.log(data);
    setUsuarios(data);
  }

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAsyncAwait();
  }, [])

  return (
    <div>
      <h2>Listado usuarios ajax</h2>
      <ol className='usuarios'>
        {
          usuarios.map(usuario => {
            return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
          })
        }
      </ol>
    </div>
  )
}
