import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getFirestore,collection, getDocs, query, where} from 'firebase/firestore'

import ItemList from './ItemList'
import Loader from "../loader/Loader"

import './containter.css'

export default function ItemListContainer() {
  const [productos,setProductos] = useState([]);
  const [loading,setLoading] = useState(true);
  const { id } = useParams()
  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(resp => setProductos(resp.docs.map(item => ({id:item.id, ...item.data()}))))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  },[])

  useEffect(() => {
    if (id) {
      setLoading(true);
      const db = getFirestore();
      const queryCollection = collection(db, 'items');
      const queryCollectionFilter = query(queryCollection, where('categories', '==', id))
      getDocs(queryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .finally(() => setLoading(false))
    } else {
        setLoading(true);
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        getDocs(queryCollection)
          .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
          .finally(() => setLoading(false))
    }
}, [id])
  return (
    <div className="container">
      <div className="info">  
      </div>
      {loading? (<Loader/>) : (<ItemList productos={productos} />)}
    </div>
  );
}