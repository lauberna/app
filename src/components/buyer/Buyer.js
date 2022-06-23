import React, { useState } from 'react'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import './buyer.css'
import swal from 'sweetalert'

function Buyer() {
  const {cartList, precioTotal, setPrecioTotal, order} = useCartContext()
  setPrecioTotal(cartList.map(product => product.count * product.price).reduce((anterior, siguiente) => anterior + siguiente, 0))
  let [mail, setMail] = useState("")
  let [name, setName] = useState("")
  let [number, setNumber] = useState("")

  function validate1(){
    if(mail.length === 0 && number.length === 0 && name.length === 0){
    }
    if(mail.length > 0 && number.length === 10 && name.length > 0){
      return(
        <Link to={'/'}>
          <p onClick={()=>order(precioTotal, mail, name, cartList, number)}>enviar pedido</p>
        </Link>
      )
    }
  }

  return(
    <div>
      <form>
        <input name='mail' type="text" placeholder='mail'
          onChange={(event) => setMail(event.target.value)}>
        </input>
        <input name='name' type="name" placeholder='name'
          onChange={(event) => setName(event.target.value)}>
        </input>
        <input name='number' className='phone' type="number" placeholder='number'
          onChange={(event) => setNumber(event.target.value)}>
        </input>
        {validate1()}

      </form>
    </div>
  )      
}

export default Buyer