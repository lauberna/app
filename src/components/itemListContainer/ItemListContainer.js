import { useEffect, useState } from "react";
import ItemList from './ItemList'
import '../itemListContainer/ItemListContainer.css'
import {getData} from '../Data/getData'
import { useParams } from "react-router-dom"


export default function ItemListContainer() {
  const [productos,setProductos] = useState([]);
  const [loading,setLoading] = useState(true);

  const { id } = useParams()

  useEffect(()=>{
    if (id){
      getData()
      .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categories === id)))
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
    } else {
      getData()
      .then(respuesta=> setProductos(respuesta))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))
    }
  }, [id])

  return (
      <div className="container">
          {loading? (<h2>Cargando...</h2>) : (<ItemList productos={productos} />)}
      </div>
  );
}