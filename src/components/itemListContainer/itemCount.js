import { useState } from 'react';
import './itemCount.css'
import { Link } from 'react-router-dom'
import { GrAdd } from "react-icons/gr";

const Input= ()=> {
    return (
        <div className="contenedor">
            <Link to='/cart' >
                <button className="finish" onClick={()=>console.log('ir a cart') }>Ir al Carrito / Terminar compra</button>
            </Link>
            <div className='barra'>—</div>
            <Link to='/' >
                <button className="seguir" onClick={()=>console.log('ir al home') }>Seguir comprando</button>
            </Link>
        </div>
    )
}


function InputCount({stock, initial, handleInter, name}) {
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
        alert(`Agregaste ${cantidad} unidad/des de ${name}`)
        handleInter()
    
        
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

const Intercambiabilidad = ({initial, stock, name, cantidad}) => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')   
        
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <InputCount handleInter={handleInter} initial={initial} stock={stock} cantidad={cantidad} name={name}/>
                : 
                    <Input />
            }
        </div>
    )
}

export default Intercambiabilidad