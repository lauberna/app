import './cartContainer.css'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartContainer = () => {
  const {cartList, deleteCart, deleteItem, precioTotal, setPrecioTotal, setProductosTotales, productosTotales, aumentar, disminuir} = useCartContext()

  setPrecioTotal(cartList.map(product => product.count * product.price).reduce((anterior, siguiente) => anterior + siguiente, 0))


  
  if(cartList.length){
    
    function canti(product){
      
      if (product.count == product.stock){

        return(
          <p style={{color:'red', fontSize:'11px'}}>No puedes agregar mas de {product.stock} unidades</p>
          
        )
      }
    }
    return (
    <div className='cartFondo'>

      <div className='contenedor1'>

        <h2>Tu pedido</h2>
          {cartList.map(product => 

          <li>
            
            <p>{product.name}</p>
            <p>Cantidad: {product.count}u</p>
            <p>{canti(product)}</p>
            <button onClick={() => disminuir(product)}>disminuir productos</button>
            <button onClick={() => aumentar(product)}>aumentar productos</button>
            <button onClick={()=> deleteItem(product.id)}>eliminar item</button>
        
            <p>Precio: ${product.price}</p>
            <p>cantidad maxima: {product.stock}</p>
          </li>
          )}           
          <p>-----------------------------------------</p>
          <p className='tPrice'>Precio final: ${precioTotal}</p>        
          <button onClick={deleteCart}>vaciar carrito</button>
          <button type="submit" >Terminar pedido</button>
        </div>
                              

    </div>
    
  )

  }else{
    return(
      <div className='padre'>
        <div className='contenedor'>
          <p className='vacio'>Su carrito se encuentra actualmente vacio</p>
          <Link to='/'>
            <button className='inicio'>volver al inicio</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default CartContainer






