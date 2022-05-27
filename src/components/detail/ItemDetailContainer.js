import React from 'react';
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {getData} from '../Data/getData'

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const {detalleId} = useParams()

  useEffect(()=> {
    getData(detalleId)
    .then(respuesta=>setProducto(respuesta))
    .catch((err)=>console.log(err))
  }, [])

  
  return (
    <div className='IDC'>
      <ItemDetail item={producto} /> 
    </div>
  )
};

export default ItemDetailContainer