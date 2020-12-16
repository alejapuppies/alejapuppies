import React, { useEffect, useState } from "react"
import UserService from "../../Services/UserService";
import findUser from "../../../Server/Firebase"

export default function FindUser(){
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:""};
    const [user, setUser] = useState(initialStateUser);
    const [id, setId] = useState("");

    const findUserById = () =>{
        findUser(id)
        .then(res => {
            setUser(res.val());
        }).catch(error=>{
            console.log(error);
        });
    }
    
    function setUserFound(user){
        setUser(user);
        console.log(user);
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
            <UserManager user = {user} initialStateUser = {initialStateUser} />
        </div>
    )
}

function UserManager(props){
    const user = props.user;
    const initialStateUser = props.initialStateUser;
    if(user == null){
        return(
            <div className="fluid-container">
                <h1 className="text-black">Usuario no encontrado</h1>
            </div>
        )
    }
    else if(user == initialStateUser){
        return(
            <div>

            </div>
        )
    }
    else if(user && user != initialStateUser){
        return(
            <div className="container mt-3">
                <h1 className="text-black">{user.name}</h1>
                <p className="text-black">{user.idCard}</p>
                <p className="text-black">{user.email}</p>
                <p className="text-black">{user.tel}</p>
                <p className="text-black">{user.adress}</p>
                <p className="text-black">{user.job}</p>
                <p className="text-black">{user.picture}</p>
            </div>
        )
    }
}