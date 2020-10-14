import React, { useState } from "react"
import PrimeraConsulta from "../Forms/PrimeraConsulta"
import FormulaMedica from "../Forms/FormulaMedica"
import AddUser from "./UsersManager/AddUser"

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
                <div class="dropdown m-1">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Usuarios
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item"  onClick={()=> setDisplay("add user")}>Agregar usuario</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Buscar usuario</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Actualizar usuario</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Eliminar usuario</button>
                    </div>
                </div>

                {/*Consultas*/}
                <div class="dropdown m-1">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Consultas
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item"  onClick={()=> setDisplay("primera consulta")}>Primera consulta</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("formula medica")}>Formula medica</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Consulta general</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Buscar consulta</button>
                    </div>
                </div>

                {/*Consultas*/}
                <div class="dropdown m-1">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Gerencial
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Agregar administrador</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Eliminar administrador</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Resumen economico</button>
                        <button class="dropdown-item"  onClick={()=> setDisplay("default")}>Finanzas</button>
                    </div>
                </div>

            </div>
            <hr className="styled-hr"/>
        
            <FormManager data = {display}/>
        </div>
    )
}

function FormManager(props){
    console.log(props.data == "default");
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
    else if(data == "add user"){
        return(
            <AddUser data = {"add"}/>
        )
    }
    else{
        return(
            <h1 className="m-5 text-black">Selecciona una opcion</h1>
        )
    }
    
}