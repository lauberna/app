import React from 'react';
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {getData} from '../Data/getData'
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const {detalleId} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, 'items', detalleId);
    getDoc(dbQuery)
        .then(respuesta => setProducto( { id: respuesta.id, ...respuesta.data() } ))
        .catch(err => console.log(err))
}, [])

  
  return (
    <div className='IDC'>
      <ItemDetail item={producto} /> 
    </div>
  )
};

export default ItemDetailContainer