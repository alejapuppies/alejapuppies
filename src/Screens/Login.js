import React from "react"
import {loginWithGoogle} from "../Server/Firebase"

export default class Login extends React.Component{
    render(){
        return(
            <div className = "login background-primary">
                <button onClick={loginWithGoogle}>Ingresar con google</button>
                <input  type="text" placeholder="email"/>
                <input type="password"/>
            </div>
        )
    }
}