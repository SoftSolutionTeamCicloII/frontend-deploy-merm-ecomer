import { useContext } from "react";

import VentaContext from "../context/VentaProvider.jsx";

const useVenta = () => useContext(VentaContext)

export default useVenta;
