import { useEffect, useState } from "react";
import ItemList from './ItemList'
import '../itemListContainer/ItemListContainer.css'
import {getData} from '../Data/getData'
import { useParams } from "react-router-dom"
import {getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore'

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
          {loading? (<h2>Cargando...</h2>) : (<ItemList productos={productos} />)}
      </div>
  );
}