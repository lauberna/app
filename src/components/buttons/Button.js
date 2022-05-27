import React from 'react'
import { Link } from 'react-router-dom'


export const Button = () => {
  return (
    <>
        <div>
            <Link to={"/"}>
                <button >Seguir comprando</button>
            </Link>
            <Link to={"/cart"}>
                <button>Finalizar compra</button>
            </Link>
        </div>
    </>
  )
}