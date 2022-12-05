import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

export const ProductoItem = ({
  id,
  title,
  price,
  image,
  category
}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;


  return (
    <>
    <div>

        <div className="producto">
               <NavLink to={`/producto/${id}`}>    
                 <div className="producto__img">
                   <img src={image} alt="title" />
                 </div>
                </NavLink>
                <div className="producto__footer">
                  <h1> {title} </h1>
                  <p> {category} </p>
                  <p className="price">{price}</p>
                </div>
                <div className="buttom">
                  <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>
                  <div>
                    <NavLink to={`/producto/${id}`} className="btn">
                       Vista
                    </NavLink>
                  </div>
                </div>
             </div>
    </div>
    </>
  )
}