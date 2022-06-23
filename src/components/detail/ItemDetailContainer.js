import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore, doc, getDoc} from 'firebase/firestore';

import ItemDetail from './ItemDetail'
import Loader from '../loader/Loader';

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading,setLoading] = useState(true);
  const {detalleId} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, 'items', detalleId);
    getDoc(dbQuery)
        .then(respuesta => setProducto( { id: respuesta.id, ...respuesta.data() } ))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
}, [])
  return (
    <div className='IDC'>
      {loading? <Loader/> : <ItemDetail item={producto} />}
    </div>
  )
};

export default ItemDetailContainer