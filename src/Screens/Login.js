import React, { useContext, useEffect, useState } from "react"
import GoogleIcon from "../Assets/Icons/Google.png"
import firebase, { auth } from "firebase"
import Modal from "../Components/Containers/Modal";
import {UserContext} from "../UserContext"

export default function Login(){

    const [info, setInfo] = useState("");
    const [msg, setMsg] = useState("");


    const loginWithGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
    
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
          });
    }

    const linkWithEmail = () =>{
        var credential = firebase.auth.EmailAuthProvider.credential(info.email, info.pass);
        firebase.auth().currentUser.linkWithCredential(credential)
        .then(res => {
            setMsg("Operacion exitosa");
        }).catch(error =>{
            setMsg("Ha ocurrido un error");
            console.log(error);
        });
    }

    const loginWithEmail = () =>{
        firebase.auth().signInWithEmailAndPassword(info.email, info.pass)
        .then(res =>{
            console.log("redirigido...")
            window.location.href="/profile";
        }).catch(error =>console.log(error));
    }

    const handleLoginInfo = (e) =>{
        setInfo({
            ...info, [e.target.name]: e.target.value
        })
    }
    
    return(
        <div className="fluid-container background-primary mt-5">
            <div className="card-shadow">
                <h1 className="h1 text-black">Iniciar sesión</h1>
                        
                <div className="form-group col-8 mx-auto">
                    <form>
                        <label className="text-black" htmlFor="inputEmail">Correo electronico</label>
                        <input name="email" value={info.email ? info.email : ""} onChange={(e) => handleLoginInfo(e)} type="email" id="inputEmail" className="form-control" required/>
                        <label className="text-black" htmlFor="inputPassword">Contraseña</label>
                        <input name="pass" value={info.pass ? info.pass : ""} onChange={(e) => handleLoginInfo(e)} type="password" id="inputPassword" className="form-control" required/>
                    </form>
                </div>
                <button className="button-primary btn-sm" onClick={() => loginWithEmail()} data-toggle="modal" data-target="#exampleModal">Login</button>
                <a className="btn" onClick={loginWithGoogle}><img src={GoogleIcon} style={{width:"30px", height:"30px"}}/></a>
            </div>

            <Modal title="Inicio de sesión" msg={msg}/>
        </div>
    )
}