import axios from "axios";

// Cliente axios

const clienteAxios = axios.create({
//baseURL: `${process.env.VITE_BACKEND_URL}/api`,
baseURL: `http://localhost:4000/api`,
});
export default clienteAxios;
