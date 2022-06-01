import { useState } from 'react';
import './itemCount.css'
import { GrAdd } from "react-icons/gr";



export const handleInter = () => {
    handleInter()
}

function ItemCount({stock, initial, handleInputType, item, onAdd}) {
    const [cantidad, setCantidad] = useState(initial);
    function increase() {
        
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else if (cantidad === stock){
          alert(`no hay mas stock, limite ${stock} unidades`)
        }
    }
    function decrease() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        } else if (cantidad === initial){
          alert(`el minimo es de ${initial} productos`)
        }
    }
    
    function addToCart() {
      onAdd(cantidad)
      handleInputType()
      
    }
    

    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
            <span className="itemCount__quantity">{cantidad}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase}>+</button>
            <button className="itemCount__addToCartBtn"  onClick={addToCart}><GrAdd/></button>
        </div>
    );
}



export default ItemCount