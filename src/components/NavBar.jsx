import Logo from '../images/images.png';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
<nav className="w-full h-20 bg-white fixed top-0 left-0 z-10 shadow-md">
        <div className="flex items-center justify-between px-4 h-full">
            <img src={Logo} alt="Logo" className="h-10"/>
    
            <div className="hidden md:flex space-x-4">
                <a href="" className="py-2">Inicio</a>
                <a href="" className="py-2">Tienda</a>
                <a href="" className="py-2">Emprendedores</a>
            </div>
    
            <div className="flex items-center space-x-4">
                <input type="text" className="h-10 w-64 border-2 border-slate-300 hover:border-black rounded" placeholder="Busqueda"/>
                <a href="" className="p-2 bg-green-500 text-white rounded"><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href="" className="hidden md:block py-2">Iniciar Sesión</a>
                <div className="flex space-x-2">
                    <a href="" className="py-2"><i className="fa-regular fa-heart"></i></a>
                    <a href="" className="py-2"><i className="fa-solid fa-bag-shopping"></i></a>
                </div>
            </div>
    
            <div className="md:hidden">
                <button className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
    
        <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col">
                <a href="" className="block p-3">Inicio</a>
                <a href="" className="block p-3">Tienda</a>
                <a href="" className="block p-3">Emprendedores</a>
                <a href="" className="block p-3">Iniciar Sesión</a>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;