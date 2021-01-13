import firebase from "firebase"
import Modal from "../../Containers/Modal"
import AdminService from "../../Services/AdminService"
import React, { useEffect, useState } from "react"

export default function AddAdmin(){

    const [msg, setMsg] = useState("Rellena los campos obligatorios");
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", rol:""};
    const [user, setUser] = useState(initialStateUser);

    const handleDataUser = (e) => {
        e.preventDefault();
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }

    function addUser(){
        if(user.idCard != "" && user.email != ""  && user.name != "" && user.tel != ""){
            AdminService.findAdminById(user.idCard)
            .then((res) => {
                if(res.val() != null){
                    setMsg("El usuario ya es administrador");
                }else{
                    AdminService.addAdmin(user)
                    .then(res =>{
                        setMsg("Administrador creado");
                        setUser(initialStateUser);
                    }).catch(error =>{
                        setMsg("Ha ocurrido un error, compruebe permisos de administrador");
                        console.log(error);
                    })
                }
            }).catch(error =>{
                setMsg("Error inesperado");
                console.log(error);
            })
        }
    };

    return(
        <div className="container form-group">
            <h1 className="text-black mx-auto">Agregar administrador</h1>
            <div className="form-group row w-100 mx-auto">
                <label className= "text-black col-sm-6 col-6 col-md-5">Nombre*</label>
                <input type="text" name="name" value={user.name || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} required/>
                <label type="number" className= "text-black col-sm-6 col-6 col-md-5">Cedula*</label>
                <input name="idCard" value={user.idCard || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} required/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Telefono*</label>
                <input name="tel" value={user.tel || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)}required/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Correo*</label>
                <input name="email" value={user.email || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} />
                <label className= "text-black col-sm-6 col-6 col-md-5">Rol</label>
                <input name="rol" value={user.rol || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)}/>
            </div>
            <button className="button-primary btn-sm mt-3 mx-auto col-8 col-sm-3 col-md-3 col-xs-3" onClick={() => addUser()} data-toggle="modal" data-target="#exampleModal">Agregar</button>

            <Modal title="Agregar administrador" msg = {msg}/>
        </div>

    )
}