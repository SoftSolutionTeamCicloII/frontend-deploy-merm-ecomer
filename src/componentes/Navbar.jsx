import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-empresa.png";
import svg60 from "../assets/svg/icons8-menu-30.svg";
import Nike from "../images/logo-team.jpg";
 
import useAuth from "../hooks/useAuth";
// import useVenta from "../hooks/useVenta";

const Navbar = ({ texto, ruta, id, perfil }) => {

  const { cerrarSesion , agregarproducto}  = useAuth();
  const [ver, setVer] = useState(false);
  
  const mostrarBarra = (n) => (ver ? setVer(false) : setVer(true));
  // const {articulosCarritos} = useVenta();

  return (
    
    <nav className="shadow bg-slate-100 mb-5">
      <div className="max-sm:hidden w-full flex justify-between px-5 items-center gap-2">
      <img src={Nike} alt="logo" width="150" />
        <input
          type="search"
          placeholder="Buscar Producto"
          className="my-3 p-3 h-10 rounded-lg w-1/2 border-2"
        />
        <button className="P-3 hover:scale-110 transition-all hover:text-lime-700 " >

          <Link to={'/agregar-productos'} className=" hover:text-lime-700" onClick={agregarproducto}>
          AGREGAR PRODUCTOS
          </Link>
          
        </button>
        <div className="flex gap-3">
          <button
            type="button"
            className={`${
              perfil && "w-0"
            }bg-sky-700 text-black rounded-lg uppercase font-medium hover:text-sky-500 transition-colors`}
          >
            <Link to={`/perfil`} className="hover:scale-110 transition-all p-2 text-center w-full flex">
              Perfil
            </Link>
          </button>
          <button type='button' className='bg-sky-700 text-white rounded-lg uppercase font-medium hover:bg-sky-500 transition-colors'>
          <Link to={`/productos/${ruta}`} className='p-2 text-center w-full flex'>{texto}</Link>
      </button>
          <button
            type="button"
            className="bg-sky-700 text-white rounded-lg uppercase font-medium hover:text-sky-500 transition-colors"
          >
            <Link to={"/"} className="p-2 text-center w-full flex"
               onClick={cerrarSesion}  
            >
              Cerrar Sesion
            </Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full flex justify-between px-5 items-center overflow-hidden z-10">
        <img src={logo} alt="logo empresa" className="w-50 h-20" />
        <button onClick={mostrarBarra}>
          <img src={svg60} alt="menu hamburguesa" />
        </button>
        {ver && (
          <div className="flex flex-col gap-3 absolute top-20 left-0 w-full bg-slate-100 p-4 justify-between">
            <input
              type="search"
              placeholder="Buscar Producto"
              className="my-3 p-3 h-10 rounded-lg border-2"
            />
            <br />
            <button
              type="button"
              className={`${
                perfil
                  ? "w-0 h-0"
                  : "bg-sky-700 text-white rounded-lg uppercase font-medium hover:bg-sky-500 transition-colors"
              }`}
            >
              <Link
                to={`/perfil`}
                className={`${
                  perfil ? "w-0 p-0 text-0" : "p-2 text-center w-full flex"
                } `}
              >
                {!perfil && "perfil"}
              </Link>
            </button>
            <button type='button' className='bg-sky-700 text-white rounded-lg uppercase font-medium hover:bg-sky-500 transition-colors'>
            <Link to={`/productos${ruta}`} className='p-2 w-full flex justify-center'>{texto}</Link>
          </button>
            <button
              type="button"
              className="bg-sky-700 text-white rounded-lg uppercase font-medium hover:bg-sky-500 transition-colors"
            >
              <Link to={"/"} className="p-2 w-full flex justify-center">
                Cerrar Sesion
              </Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
