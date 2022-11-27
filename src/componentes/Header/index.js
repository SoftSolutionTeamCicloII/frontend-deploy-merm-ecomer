import React, { useContext } from 'react'
import Nike from "../../images/Nike.jpg";
import {NavLink} from "react-router-dom";
import { DataContext } from '../../context/DataProvider';



export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toogleMenu = () =>{
        setMenu(!menu)
    }


    return (
        <>
        <header> 
             <NavLink to="/">
              <div className="logo" >
                 <img src={Nike} alt="logo" width="150" />
              </div>  
              </NavLink>
            <ul >
                <li >
                    <NavLink to="/">INICIO</NavLink>
                </li>
                <li >
                    <NavLink to="/productos">PRODUCTOS</NavLink>
                </li>
                <li >
                    <NavLink to="/login">LOGIN</NavLink>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                   <box-icon name="cart"></box-icon> 
                   <span className='item_total'>{carrito.length}</span>
            </div>
       </header>
       </>   
    )
}