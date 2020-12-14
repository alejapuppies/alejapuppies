import React, { useEffect, useState } from "react"
import UserService from "../../Services/UserService";

export default function FindUser(){
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:""};
    const [user, setUser] = useState(initialStateUser);
    const [id, setId] = useState("");

    const findUserById = () =>{
        console.log(id);
        UserService.findUserById(id)
        .then(res =>{
            console.log(res.data);
            setUser(res.data);
        })
        .catch(error =>{
            alert("El sistema no responde");
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
            
            <div className="container mt-3">
                <h1 className="text-black">{user ? user.name : ""}</h1>
                <p className="text-black">{user ? user.idCard : ""}</p>
                <p className="text-black">{user ? user.email : ""}</p>
                <p className="text-black">{user ? user.tel : ""}</p>
                <p className="text-black">{user ? user.adress : ""}</p>
                <p className="text-black">{user ? user.job : ""}</p>
                <p className="text-black">{user ? user.picture : ""}</p>
            </div>
        </div>
    )
}