import './cartContainer.css'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import Cart from './Cart'


const CartContainer = () => {
  const {cartList, deleteCart, deleteItem, precioTotal, setPrecioTotal, setProductosTotales, productosTotales, aumentar, disminuir} = useCartContext()

  setPrecioTotal(cartList.map(product => product.count * product.price).reduce((anterior, siguiente) => anterior + siguiente, 0))


  
  if(cartList.length){
    return (
    <div className='cartFondo'>
      <div  className='cartFondo1'>
        <div className='contenedor1'>

        <h2>Tu pedido</h2>
          {cartList.map(product => 

          <li>
            
            <p>{product.name}</p>
            <p>Cantidad: {product.count}u</p>
            <button onClick={() => disminuir(product)}>disminuir productos</button>
            <button onClick={() => aumentar(product)}>aumentar productos</button>
            <button onClick={()=>deleteItem(product.id)}>eliminar item</button>
        
            <p>Precio: ${product.price}</p>
            <p>cantidad maxima: {product.stock}</p>
          </li>
          
          )}           
          <p>-----------------------------------------</p>
          <p className='tPrice'>Precio final: ${precioTotal}</p>        
          <button onClick={deleteCart}>vaciar carrito</button>
          <div className="cartInfo">
            <form>
              <input type="text" placeholder="Nombre"/>
              <input type="text" placeholder="Apellido"/>
              <input type="email" placeholder="Correo electronico"/>
              <button type="submit">Terminar pedido</button>
            </form>
          </div>
        </div>
                              
      </div>

    </div>
    
  )

  }else{
    return(
      <div className='contenedor'>
        <p>Su carrito se encuentra actualmente vacio</p>
        <Link to='/'>
          <p>Seguir comprando</p>
        </Link>
      </div>
    )
  }
}

export default CartContainer