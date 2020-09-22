import React, { useState } from "react"
import firebase from "firebase";
import {loginWithGoogle, signOut} from "../Server/Firebase";

export default function DataLogin(){
    const [user, setUser] = useState("");

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
          setUser(user);
        }
        else{
          setUser(null);
        }
    });

    if(user){
        return <div className="dropdown">
            <button className="btn btn-white float-right text-line" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.displayName}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/profile">Perfil</a>
                <a className="dropdown-item" href="#">Consultas</a>
                <a className="dropdown-item" onClick={signOut} href="">Cerrar Sesion</a>
            </div>
        </div>
    }
    else{
        return <a className = "btn btn-white float-right text-line" onClick={loginWithGoogle}>Ingresar</a>
    }
}