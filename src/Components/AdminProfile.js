import React, { useState } from "react"
import PrimeraConsulta from "./Forms/PrimeraConsulta"
import FormulaMedica from "./Forms/FormulaMedica"

export default function AdminProfile(props){
    const {user} = props;
    const [display, setDisplay] = useState("default");

    return(
        <div className="fluid-container bg-light pt-5 pb-5 pl-1 pr-1">
            <img src={user.photoURL} className = "profile-img"></img>
            <h1 className = "d-4 text-black">{user.displayName}</h1>
            <span className="text-black">{user.email}</span>
            <hr className="styled-hr"/>
            <div className="row w-100 mx-auto container">
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("default")}>Resumen</button>
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("primera consulta")}>Primera consulta</button>
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("default")}>Buscar usuario</button>
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("formula medica")}>Formula medica</button>
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("default")}>Buscar usuario</button>
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("default")}>Actualizar usuario</button>
                <button className="btn btn-largue btn-outline-dark mx-auto m-1" onClick={() => setDisplay("default")}>Eliminar usuario</button>
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
    else{
        return(
            <h1 className="m-5 text-black">Selecciona una opcion</h1>
        )
    }
    
}