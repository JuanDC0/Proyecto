import React from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () =>{
    const paginaActual = useLocation().pathname 
    return(
        <div className={`${style.contenedor}`}>
            <Link className={`${style.Link} ${ paginaActual == '/'? style.tabSelected: ''}`} to={"/"}>Calculadora</Link>
            <Link className={`${style.Link} ${ paginaActual == '/proyecto'? style.tabSelected: ''}`} to={"/proyecto"}>Proyecto</Link>
            <Link className={`${style.Link} ${ paginaActual == '/integrantes'? style.tabSelected: ''}`} to={"/integrantes"}>Integrantes</Link>
            <Link className={`${style.Link} ${ paginaActual == '/about'? style.tabSelected: ''}`} to={"/about"}>Tecnologías</Link>
        </div>
    )
}

export default Navbar;