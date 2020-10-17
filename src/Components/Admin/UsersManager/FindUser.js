import React, { useEffect, useState } from "react"
import UserService from "../../Services/UserService";

export default function FindUser(){
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");

    const findUsertByName = (name) =>{
        UserService.findUserByName(name)
        .then(res =>{
            setUsers(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleName = (e) =>{
        setName(e.target.value);
        findUsertByName(e.target.value);
        //Limpiar la lista de usuarios despues de una accion con el usuario
    }
    
    return(
        <div className="container">
            <div className="row w-100 col-12">
                <h1 className="text-black col-12">Buscar usuario:</h1>
                <input className="form-control col-12 col-sm-4 col-xs-4 col-md-4 mx-auto" name="name" value={name || ""} placeholder="Nombre" onChange={(name) => handleName(name)}/>
            </div>
            
            {
                users.map(data =>{
                    {
                        if(name != ""){
                            return(
                                <div className="container mt-3" key={data.idCard}>
                                    <h1 className="text-black">{data.name}</h1>
                                    <p className="text-black">{data.idCard}</p>
                                    <p className="text-black">{data.email}</p>
                                    <p className="text-black">{data.tel}</p>
                                    <p className="text-black">{data.adress}</p>
                                    <p className="text-black">{data.job}</p>
                                    <p className="text-black">{data.picture}</p>
                                </div>
                            )
                        }
                    }
                })
            }

        </div>
    )
}