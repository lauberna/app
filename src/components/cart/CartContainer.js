import { Link } from 'react-router-dom'

import {useCartContext} from '../context/CartContext'

import './cartContainer.css'

const CartContainer = () => {
  
  const {cartList, deleteCart, deleteItem, precioTotal, setPrecioTotal, aumentar, disminuir} = useCartContext()
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
        <br/>
          {cartList.map(product => 
            <div>
              <p>{product.name}</p>
              <p>Cantidad: {product.count}u</p>
              <p>{canti(product)}</p>
              <button className='btn' onClick={() => disminuir(product)}>-</button>
              <button className='btn' onClick={() => aumentar(product)}>+</button>
              <button className='btn' onClick={()=> deleteItem(product.id)}>X</button>
              <p>Precio/u: ${product.price}</p>
              <p>cantidad maxima: {product.stock}</p>
            </div>
          )}           
          <br/>
          <p className='tPrice'>Precio final: ${precioTotal}</p>        
          <button onClick={deleteCart}>vaciar carrito</button>
          <Link to={'/finalizarCompra'}>
            <button>Terminar pedido</button>
          </Link>
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






