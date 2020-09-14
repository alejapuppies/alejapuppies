import React from "react"

export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg menu-nav navbar-light">
            <a className="navbar-brand text-white" href="#">Aleja Puppies</a>
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Quienes somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Faqs</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mascotas
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Perros</a>
                        <a class="dropdown-item" href="#">Gatos</a>
                        <a class="dropdown-item" href="#">Roedores</a>
                        <a class="dropdown-item" href="#">Peces</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Otro</a>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    )
}