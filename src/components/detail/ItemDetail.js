import { useState } from 'react';

import { Button } from '../buttons/Button';
import { useCartContext } from '../context/CartContext'
import ItemCount from '../itemListContainer/itemCount'

import './itemDetail.css'

function ItemDetail({item}) {
  const {addToCart} = useCartContext()
  const [inputType, setInputType] = useState('itemCount');
  function handleInputType() {
    setInputType('buyButtons');
  }
  const onAdd = (count) => {
    
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
        <div className='contenedorCount'>
          {inputType === 'itemCount' && item.stock > 0 ?
            <ItemCount initial={1} stock={item.stock} item={item} onAdd={onAdd} handleInputType={handleInputType}/>:
            <Button stock={item.stock}/>}
            <img className="imagen" src={item.img} alt='img' />
        </div>
      </div>
        
    </div>
  )
}

export default ItemDetail