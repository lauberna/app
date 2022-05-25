import {AiOutlineShoppingCart} from "react-icons/ai";
import '../cart/cssCart.css'
import { Link } from 'react-router-dom'

function Cart() {

  return (
    <Link to="/Cart">
      <div className="CartWidget" >
          <a><AiOutlineShoppingCart className="cart"/></a>
      </div>
    </Link>
  )
}

export default Cart