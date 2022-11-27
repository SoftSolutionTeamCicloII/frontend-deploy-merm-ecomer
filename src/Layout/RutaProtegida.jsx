import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "../componentes/Navbar.jsx";


const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    console.log(auth);

    if (cargando) return "cargando...";

    return (

<div className="h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default RutaProtegida;
