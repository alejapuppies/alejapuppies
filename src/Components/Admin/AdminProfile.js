import React, { useState } from "react"
import PrimeraConsulta from "../Forms/PrimeraConsulta"
import FormulaMedica from "../Forms/FormulaMedica/FormulaMedica"
import AddUser from "./UsersManager/AddUser"
import FindUser from "./UsersManager/FindUser";
import ControlMedico from "../Forms/ControlMedico";
import AddAdmin from "./AdminManager/AddAdmin";
import Stock from "./StockManager/Stock";
import AddProduct from "./StockManager/AddProduct";

export default function AdminProfile(props){
    const {user} = props;
    const [display, setDisplay] = useState("default");

    return(
        <div className="fluid-container bg-light pt-5 pb-5 pl-1 pr-1">
            <img src={user.photoURL} className = "profile-img"></img>
            <h1 className = "d-4 text-black">{user.displayName}</h1>
            <span className="text-black">{user.email}</span>
            <hr className="styled-hr"/>
            <div className = "row w-100 mx-auto">
                {/*Usuarios*/}
                <div className="dropdown m-1">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Usuarios
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item"  onClick={()=> setDisplay("add user")}>Agregar usuario</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("find user")}>Buscar usuario</button>
                    </div>
                </div>

                {/*Consultas*/}
                <div className="dropdown m-1">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Formularios
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item"  onClick={()=> setDisplay("primera consulta")}>Primera consulta</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("formula medica")}>Formula medica</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("control medico")}>Control Medico</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Buscar consulta</button>
                    </div>
                </div>

                {/*Gerencial*/}
                <div className="dropdown m-1">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Gerencial
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item"  onClick={()=> setDisplay("addAdmin")}>Agregar administrador</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Eliminar administrador</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Resumen economico</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Finanzas</button>
                    </div>
                </div>

                {/*Facturacion*/}
                <div className="dropdown m-1">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Facturación
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Generar Factura</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Consultar Factura</button>
                    </div>
                </div>

                {/*Inventario*/}
                <div className="dropdown m-1">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Inventario
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item"  onClick={()=> setDisplay("showStock")}>Ver inventario</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("addProduct")}>Agregar producto</button>
                        <button className="dropdown-item"  onClick={()=> setDisplay("default")}>Eliminar producto</button>

                    </div>
                </div>

            </div>
            <hr className="styled-hr"/>
        
            <FormManager data = {display}/>
        </div>
    )
}

function FormManager(props){
    const data = props.data;
    if(data == "primera consulta"){
        return(
            <PrimeraConsulta/>
        )
    }
    else if(data == "formula medica"){
        return(
            <FormulaMedica/>
        )
    }
    else if(data == "control medico"){
        return(
            <ControlMedico/>
        )
    }
    else if(data == "add user"){
        return(
            <AddUser title = "Agregar usuario"/>
        )
    }
    else if(data == "find user"){
        return(
            <FindUser/>
        )
    }
    else if(data == "addAdmin"){
        return(
            <AddAdmin />
        )
    }
    else if(data == "showStock"){
        return(
            <Stock />
        )
    }
    else if(data == "addProduct"){
        return(
            <AddProduct />
        )
    }
    else{
        return(
            <div className="fluid-container">
                <h1 className="m-5 text-black">Selecciona una opción</h1>
            </div>

        )
    }
    
}