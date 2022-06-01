import React from 'react'
import { Link } from 'react-router-dom'
import '../buttons/buttons.css'


export const Button = () => {
  return (
    <>
        <div className='contenedor-btn'>
            <Link to={"/"}>
                <button className='botonSeguir'>Seguir comprando</button>
            </Link>
            <div>–</div>
            <Link to={"/cart"}>
                <button className='botonFin'>Finalizar compra</button>
            </Link>
        </div>
    </>
  )
}