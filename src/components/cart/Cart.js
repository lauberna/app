import {AiOutlineShoppingCart} from "react-icons/ai";
import '../cart/cssCart.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'


function Cart() {
  const { cartList, setProductosTotales, productosTotales } = useCartContext();
  setProductosTotales(cartList.map(product => product.count).reduce((anterior, siguiente) => anterior + siguiente, 0))

  if (productosTotales > 0){
  return (
    <Link to="/Cart">
      <div className="CartWidget" >
          <p className="cont">{productosTotales}</p>
          <a><AiOutlineShoppingCart className="cart"/></a>
      </div>
    </Link>
  )
  }else{
    return(
      <Link to ="/Cart">
        <div className="CartWidget1" >
            <a><AiOutlineShoppingCart className="cart"/></a>
        </div>

      </Link>
    )
  }
}

export default Cart