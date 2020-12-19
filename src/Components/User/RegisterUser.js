import React, { useState } from "react"
import AddUser from "../Admin/UsersManager/AddUser"
import UserService from "../Services/UserService";
import Modal from "../Containers/Modal"

export default function RegisterUser(props){
    const [msg, setMsg] = useState("");

    {/*user*/}
    const initialStateUser = {name:props.user.displayName, idCard:"", email:props.user.email, tel:"", adress:"", job:"", picture:props.user.photoURL};
    const [user, setUser] = useState(initialStateUser);

    {/*Limpiar datos*/}
    const reset = () =>{
        setUser({...initialStateUser});
    }

    {/*Guarda los input del usuario en los datos*/}
    const handleDataUser = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }

    const checkData = (e)=>{
        e.preventDefault();
        if(user.idCard == "" || user.name == "" || user.tel == "") {
            setMsg("Completa los campos obligatorios");
        }
        else{
            UserService.findUserById(user.idCard)
            .then(res => {
                console.log(res.data);
                if(res.val() == undefined || res.val() == null)
                    addUser(e);
                else
                    setMsg("El numero de cedula ya esta en uso");
            }).catch(error =>{
                console.log(error);
            });
        }
    }

    {/*Agregar el usuario*/}
    const addUser = (e) =>{
        e.preventDefault();
        let data = {
            name:user.name,
            idCard: user.idCard,
            email: user.email,
            tel: user.tel,
            adress: user.adress,
            job: user.job,
            picture: user.picture
        }
       
        UserService.addUser(data)
        .then(res => {
            if(res.data){
                setMsg("Usuario guardado");
                reset();
            }else{
                setMsg("Error inesperado, revise los datos");
            }
        })
        .catch(error =>{
            setMsg("No se ha podido guardar el usuario: " + error);
        });
    }
    return(
        <div className="container mx-auto mt-5">
            <div>
                <h1 className="text-black">Agregar usuario</h1>
            </div>

            <div>
                {/*DATOS user*/}
                <div className="card-shadow p-3">
                    <img className="profile-img mt-3 mb-3" src = {user.picture}/>
                    <div className="form-group row w-100 mx-auto">
                        <label className= "text-black col-sm-6 col-6 col-md-5">Nombre*</label>
                        <input type="text" name="name" value={user.name || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} required/>
                        <label type="number" className= "text-black col-sm-6 col-6 col-md-5">Cedula*</label>
                        <input name="idCard" value={user.idCard || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} required/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Telefono*</label>
                        <input name="tel" value={user.tel || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)}required/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Dirección</label>
                        <input name="adress" value={user.adress || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Correo</label>
                        <input name="email" value={user.email || ""} className="form-control col-sm-6 col-6 col-md-7 " disabled/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Ocupacion</label>
                        <input name="job" value={user.job || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)}/>
                    </div>                    
                </div>

                {/*Terminar*/}
                <div className="row w-100 mx-auto mt-5">
                    <button type="submit" className="m-1 mx-auto btn btn-sm btn-success col-12 col-sm-3 col-xs-3 col-md-3" onClick={(e) => checkData(e)} data-toggle="modal" data-target="#exampleModal">Guardar</button>
                    <button className="m-1 mx-auto btn btn-sm btn-danger col-12 col-sm-3 col-xs-3 col-md-3" type="reset" onClick={() => reset()}>Limpiar</button>
                </div>
            </div>
                        
            <Modal title = "Registrar usuario" msg = {msg}/>
        </div>
    )
}