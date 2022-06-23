import { useState } from 'react'
import { Link } from 'react-router-dom'

import {useCartContext} from '../context/CartContext'

import './buyer.css'

function Example() {
  const {cartList, precioTotal, setPrecioTotal, order} = useCartContext()
  setPrecioTotal(cartList.map(product => product.count * product.price).reduce((anterior, siguiente) => anterior + siguiente, 0))
  let [mail, setMail] = useState("")
  let [name, setName] = useState("")
  let [number, setNumber] = useState("")
  let [locality, setLoality] = useState("")
  let [coment, setComent] = useState("")

  function validate1(){
    if(mail.length === 0 && number.length === 0 && name.length === 0 && locality.length === 0 && coment
      .length === 0){
    }
    if(mail.length > 0 && number.length > 0 && name.length > 0 && locality.length > 0 && coment
      .length > 0){
      return(
        <Link to={'/'}>
            <p className="block">
                <button onClick={()=>order(precioTotal, mail, name, cartList, number, locality, coment)}>enviar pedido</button>
            </p>
        </Link>
      )
    }
  }
  return (
    <div className="content">
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Check Out</h3>
          <form action="">
            <p>
              <label>Full Name</label>
              <input type="text" name="fullname" onChange={(event) => setName(event.target.value)} />
            </p>
            <p>
              <label>Email Adress</label>
              <input type="email" name="email" onChange={(event) => setMail(event.target.value)} />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="tel" name="phone" onChange={(event) => setNumber(event.target.value)} />
            </p>
            <p>
              <label>locality</label>
              <input type="text" name="affair" onChange={(event) => setLoality(event.target.value)} />
            </p>
            <p className="block">
              <label>Message</label> 
              <textarea name="message" rows="3" onChange={(event) => setComent(event.target.value)} ></textarea>
            </p>
            {validate1()}
          </form>
        </div>
          <div className="contact-info">
            <h4>More Info</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i>direction</li>
              <li><i className="fas fa-phone"></i> (111) 111 111 111</li>
              <li><i className="fas fa-envelope-open-text"></i> contact@website.com</li>
            </ul>
            <p>Company.com</p>
          </div>
      </div>
    </div>
  )
}

export default Example