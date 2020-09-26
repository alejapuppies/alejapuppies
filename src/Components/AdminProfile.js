import React from "react"
import PrimeraConsulta from "./Forms/PrimeraConsulta"

export default function AdminProfile(props){
    const {user} = props;
    return(
        <div className="mt-5 container">
            <img src={user.photoURL} className = "profile-img"></img>
            <h1 className = "d-4 text-black">{user.displayName}</h1>
            <span className="text-black">{user.email}</span>

            <div className="row w-100 mx-auto mt-5">
                <button className="btn btn-largue btn-primary mx-auto m-1">Registrar usuario</button>
                <button className="btn btn-largue btn-primary mx-auto m-1">Buscar usuario</button>
                <button className="btn btn-largue btn-primary mx-auto m-1">Actualizar usuario</button>
                <button className="btn btn-largue btn-primary mx-auto m-1">Eliminar usuario</button>
            </div>

            <PrimeraConsulta/>
            
        </div>
    )
}