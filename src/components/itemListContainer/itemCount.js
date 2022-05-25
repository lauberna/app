import { useState } from 'react';
import './itemCount.css'
import { Link } from 'react-router-dom'
import { GrAdd } from "react-icons/gr";




const Input= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >Ir al Cart o Terminar compra</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando</button>
        </Link>
        </>
    )
}


function InputCount({stock, initial, onAdd, handleInter}) {
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
        onAdd(cantidad);
        
    }

    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
            <span className="itemCount__quantity">{cantidad}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase}>+</button>
            <button className="itemCount__addToCartBtn"  onClick={handleInter}><GrAdd/></button>
        </div>
    );
}

const Intercambiabilidad = ({initial, stock, name, cantidad}) => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=({cantidad})=>{
        setInputType('input')   
    }
    
    return (
        <div>
            <h2>Item Description</h2>
            
            {
                inputType === 'button' ? 
                    <InputCount handleInter={handleInter} initial={initial} stock={stock} cantidad={cantidad} />
                : 
                    <Input />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad