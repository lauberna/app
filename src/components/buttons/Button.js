import { Link } from 'react-router-dom'

import '../buttons/buttons.css'


export const Button = ({stock}) => {
  if(stock >= 1){
    return (
      <>
        <div className='contenedor-btn'>
          <Link to={"/"}>
            <button className='botonSeguir'>Seguir comprando</button>
          </Link>
          <Link to={"/cart"}>
            <button className='botonFin'>Finalizar compra</button>
          </Link>
          <div>–</div>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className='contenedor-btn'>
          <p>Por el momento no contamos con stock suficiente</p>
          <Link to={"/"}>
            <button className='botonSeguir'>Seguir comprando</button>
          </Link>
          <div>–</div>
        </div>
      </>
    )
  }
}