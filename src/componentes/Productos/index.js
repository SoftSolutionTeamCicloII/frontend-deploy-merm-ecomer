import React, { useContext, useState } from 'react';
import {DataContext} from "../../context/DataProvider";
import {ProductoItem} from "./ProductoItem";


export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  // const  key = useState ("")
  // const  id = useState ("")
  // const  title = useState ("")
  // const  price = useState ("")
  // const  image = useState ("")
  // const  category = useState ("")

  console.log(productos)

    return ( 
        <>
            <h1 className="title">PRODUCTOS</h1>
               <div className="productos">
                   {productos.map(producto =>(
          <ProductoItem 

               key={producto.id}
               id={producto.id}
               title={producto.title}
               price={producto.price}
               image={producto.image}
               category={producto.category}

          />

        ))}
        {/* <ProductoItem>

        </ProductoItem>
       */}

           </div>
        </>
    );
};