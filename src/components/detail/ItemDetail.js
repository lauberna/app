import React from 'react'
import ItemCount from '../itemListContainer/itemCount'
import itemImg from '../../images/bici.jpg';
import './itemDetail.css'



function ItemDetail({item}) {

    const onAdd = (cant) => {
        alert(`agregaste ${cant} productos`)
    }

    console.log(item)
  return (
    <div className="itemDetail">
            <div className='inf'>
                <h3 className="tittle">{item.name}</h3>
                <p className='price'>{`precio $${item.price}`}</p>
                <p className='stock'>el stock es de {item.stock}</p>
                <div className='contenedor'>
                  <p className="detail">{item.description}</p>
                </div>
                <div className='contenedorCount'>
                  <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
            <img className="imagen" src={itemImg} alt='img' />
            <div className="card"></div>
        </div>
  )
}

export default ItemDetail