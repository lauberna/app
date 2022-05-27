import React from 'react'
import { useCartContext } from '../context/CartContext'
import { useState } from 'react';
import { Button } from '../buttons/Button';

import ItemCount from '../itemListContainer/itemCount'
import itemImg from '../../images/bici.jpg';
import './itemDetail.css'






function ItemDetail({item}) {

  const {addToCart} = useCartContext()
  const [inputType, setInputType] = useState('itemCount');

  function handleInputType() {
    setInputType('buyButtons');
  }


  const onAdd = (count) => {
    console.log(`Has agregado ${count} producto/s a tu carrito`)
    addToCart( { ...item, count} )
  }

  return (
    <div className="itemDetail">
            <div className='inf'>
                <h3 className="tittle">{item.name}</h3>
                <p className='price'>{`precio $${item.price}`}</p>
                <p className='stock'>{`el stock es de ${item.stock} unidades`}</p>
                <div className='contenedor'>
                  <p className="detail">{item.description}</p>
                </div>
                  <div className='seguir'>
                  </div>
                <div className='contenedorCount'>
                  
                  
                  {inputType === 'itemCount' ?
                    <ItemCount initial={1} stock={item.stock} item={item} onAdd={onAdd} handleInputType={handleInputType}/>:
                    <Button/>}
                </div>
            </div>
            <img className="imagen" src={itemImg} alt='img' />
            <div className="card"></div>
        </div>
  )
}

export default ItemDetail