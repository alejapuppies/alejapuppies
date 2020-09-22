import React, {useState} from "react"
import firebase from "firebase"
import {isLoggedIn} from "../Server/Firebase"

export default function UserInfo(){
    const [user, setUser] = useState("");

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
          setUser(user);
        }
        else{
          setUser(null);
        }
    });

    console.log(firebase.auth().currentUser);
    
    if(user){
        return <div className="mt-5 container">
            <img src={user.photoURL} className = "profile-img"></img>
            <h1 className = "d-4 text-black">{user.displayName}</h1>
            <span className="text-black">{user.email}</span>
        </div>
    }
    else{
        return <div className="container">
            <img className="img-responsive fluid-img mt-5" src="https://miracomosehace.com/wp-content/uploads/mch/id_6109.jpg"></img>
        </div>
    }
}