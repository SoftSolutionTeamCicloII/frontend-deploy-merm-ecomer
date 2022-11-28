import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider' 

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const[carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const toogleFalse = ()=>{
    setMenu(false);
  };

  const resta = id => {
    carrito.forEach(item =>{
      if(item.id === id){
        item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
      }
      setCarrito([...carrito])
    })
  }

  const suma = id =>{
    carrito.forEach(item =>{
      if(item.id === id){
         item.cantidad +=1;
      }
      setCarrito([...carrito])
    })
    
  }


    
	const removeProducto = id =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
        if( item.id=== id){
          item.cantidad = 1;
          carrito.splice(index, 1)
          
        }
			})
      setCarrito([...carrito])
    }
    

	}

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

 


  return (
    <div className={show1}>
      <div className={show2}>
        <div className='carrito__close' onClick={toogleFalse}>
         <box-icon  name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>


        <div className='carrito__center'>
      {  

        carrito.length === 0 ? <h2 style={{
          textAlign: "center", fontSize: "3rem"
        }}>Carrito Vacio</h2> : <> {

        carrito.map((producto)=>(
          <div className='carrito__item' key={producto.id}>
          <img src={producto.image} alt=""/>
          <div>
            <h3>{producto.title}</h3>
            <p className="price">{producto.price}</p>
          </div>
          <div>
            <box-icon className='remove__item'  Name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
            <p className="cantidad">{producto.cantidad}</p>
            <box-icon Name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
          </div>
          <div className='remove__item'  onClick={() => removeProducto(producto.id)} >
            <box-icon name="trash"></box-icon>
          </div>
          </div>

        ))
     
      }
      </>
      }
        </div>
        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className='btn'>Pagar</button>
        </div>
      </div>
    </div>
  )
}
