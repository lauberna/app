import './cartContainer.css'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {
 
  const {cartList, deleteCart, deleteItem} = useCartContext()
  if(cartList.length){
    return (
    <div>
      <div>
        <h2>Tu pedido</h2>
          {cartList.map(product => 
          <li>
            <p>{product.name}</p>
            <p>Cantidad: {product.count}u</p>
            <p>Precio: ${product.price}</p>
            <button onClick={()=>deleteItem(product.id)}>Borrar item</button>
          </li>)}                     
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