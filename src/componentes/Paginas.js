import {  Route, Routes } from 'react-router-dom'
import React from 'react'

import { AuthProvider } from '../context/AuthProvider';
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index.js";
import  {ProductoDetalles} from "./Productos/ProductoDetalles.js"
// Layout 
import LayoutAuth   from "../../src/Layout/LayoutAuth.jsx"
import RutaProtegida from "../Layout/RutaProtegida.jsx";
// Pages Usuarios
import Login from '../pages/Login.jsx';
import Registro from '../../src/pages/usuario/Registro.jsx'
import OlvidePassword from '../../src/pages/usuario/OlvidePassword'
import Confirmar from '../../src/pages/usuario/Confirmar'

 
// pages (usuarios protegidas)
import Perfil from "../pages/usuario/Perfil.jsx";
import CambiarPassword from "../pages/usuario/CambiarPassword.jsx";

// pages (productos)
 import ListaProductos from "./Productos/ListaProductos";
import FormularioProductos from "./Productos/FormularioProductos.jsx";
import DetalleProducto from "./Productos/DetalleProducto.jsx";


export const Paginas = () => {
  
  return (
    <section>
    <AuthProvider>
      <Routes>
          <Route path= "/"  element={<Inicio/>} />
          <Route path= "productos"  element={<ProductosLista/>}/>
          <Route path= "producto/:id"  element={<ProductoDetalles/>}/>
          <Route path= "login"  element={<Login/>}/>
          <Route path="/" element={<LayoutAuth />}>
        
          <Route path="registro" element={<Registro />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="confirmar/:id" element={<Confirmar />} />

           {/* Rutas Protegidas */}
           <Route path="/perfil" element={<RutaProtegida />}>
                <Route index element={<Perfil />} />
                <Route path="cambiar-password" element={<CambiarPassword />} />
              </Route>
              <Route path="/products" element={<RutaProtegida />}>
                <Route index element={<ListaProductos />} />
                <Route
                  path="agregar-producto"
                  element={<FormularioProductos />}
                />
                <Route
                  path="detalle-producto/:id"
                  element={<DetalleProducto />}
                />
       
       </Route>
        </Route>
        
      </Routes>
      </AuthProvider>
    </section>
  )
}
