import React , {useState} from "react"
import DataLogin from "../../Components/Containers/DataLogin"
import Logo from "../../Assets/Icons/Logo.png"
import "../../Styles/Home.css"

export default function Menu(){

    return(
        <nav className="navbar navbar-expand-lg menu-nav navbar-light menu-navbar">
            <a className="navbar-brand text-white" href="/" style={{fontSize:"3vw"}}><img className="mr-1" src = {Logo}  style = {{width:"30%", height:"50%"}}/>Bien Animal</a>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="menu-bar">
                    <li className="">
                        <a className="text-white" href="/">Home</a>
                    </li>
                    <li className="">
                        <a className="text-white" href="/#">Quienes somos</a>
                    </li>
                    <li className=" dropdown">
                        <a className=" dropdown-toggle text-white" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Servicios
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/#">Servicio 1</a>
                        <a className="dropdown-item" href="/#">Servicio 2</a>
                        </div>
                    </li>
                    <li className="">
                        <a className="text-white" href="/#">Contacto</a>
                    </li>
                    
                    <li>
                        <DataLogin/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}