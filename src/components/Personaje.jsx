import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../functions/funciones'


const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  },[])
  const params = useParams()


  return (
    <>
    {personaje != null ? (
    <div className='container card-body d-flex justify-content-center'>
      <div className='row'>
        <div className='col-md-12'>
          <img className="card-img-top" src={personaje.image} alt="" /> 
          <h2 className='card-title'>{personaje.name}</h2>
        </div>
     </div>
    
    </div>) : ('no hay personaje')}
    
    </>
  )
}

export default Personaje