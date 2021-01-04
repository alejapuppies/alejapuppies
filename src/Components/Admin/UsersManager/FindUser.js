import React, { useEffect, useState } from "react"
import UserService from "../../Services/UserService";
import UserProfile from "../../User/UserProfile";
import firebase from "firebase"

export default function FindUser(){
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:"", picture: "", pets:[]};
    const [user, setUser] = useState(initialStateUser);
    const [id, setId] = useState("");

    const findUserById = () =>{
        setUser(initialStateUser);
        UserService.findUserById(id)
        .then(res => {
            setUser(res.val());
        }).catch(error=>{
            console.log(error);
        });
    }

    const handleId = (e) =>{
        e.persist();
        setId(e.target.value);
    }
    
    return(
        <div className="container">
            <div className="row w-100 col-12">
                <h1 className="text-black col-12 mx-auto">Buscar usuario:</h1>
                <input className="form-control col-12 col-sm-4 col-xs-4 col-md-4 mx-auto" name="id" placeholder="id" onChange={(e) => handleId(e)}/>
            </div>
            <button className="btn btn-primary btn-sm mt-3 mx-auto col-8 col-sm-3 col-md-3 col-xs-3" onClick={() => findUserById()}>Buscar</button>
            <UserManager user = {user} />
        </div>
    )
}

function UserManager(props){
    const user = props.user;
    if(user == null){
        return(
            <div className="fluid-container">
                <h1 className="text-black">Usuario no encontrado</h1>
            </div>
        )
    }
    else if(user.idCard != ""){
        return(
            <div className="container mt-3 border-black">
                <UserProfile user = {user}/>
            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}