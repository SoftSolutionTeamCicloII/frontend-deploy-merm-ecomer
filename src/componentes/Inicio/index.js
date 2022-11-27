import React from 'react'
import Portada from "../../images/inicio.jpg";
import {NavLink} from "react-router-dom";

export const Inicio = () => {
  return (
    <div className='inicio'>
      <NavLink to="/">
        <h1  >Inicio</h1>
      </NavLink>
      <NavLink to="/productos">
        <h1 >Productos</h1>
      </NavLink>
      <img src={Portada} alt="inicio" />
    </div>
  )
}



