import React, {useRef, useState} from "react"
import AddUser from "../Admin/UsersManager/AddUser"
import ProfilePictureDefault from "../../Assets/Icons/profile.png"
import Anamnesis from "./Anamnesis"
import ExamenClinico from "./ExamenClinico"
import ReviewPet from "./ReviewPet"

export default function PrimeraConsulta(){

    {/*Es para simular el click en el input type="file" pero personalizado (como button)*/}
    const fileHidenInput = useRef("");
    const handleClick = e =>{
        fileHidenInput.current.click();
    }

    const [userDone, setUserDone] = useState(false);
    const [anamnesisDone, setAnamnesisDone] = useState(false);
    const [examenClinDone, setExamenClin] = useState(false);
    
    {/*user*/}
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:""};
    const [user, setUser] = useState(initialStateUser);

    {/*Guarda los input del usuario en los datos*/}
    const handleDataUser = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
        if(user.name && user.idCard && user.tel && pet.name && pet.breed){
            setUserDone(true);
        }else{
            setUserDone(false);
        }
    }
    const handleImg = e => {
        if(e.target.files.length){
            setPet({...pet, picture:URL.createObjectURL(e.target.files[0])});
        }
    }

    {/*MASCOTA*/}
    const initialStatePet = {name: "", kind: "", breed: "", color: "", size: "", age: "", birthday:"", gender: "", reproductiveStatus: "", weigth: "", picture:""};
    const [pet, setPet] = useState(initialStatePet);
    const [done, setDone] = useState(false);

    {/*Limpiar datos*/}
    const reset = () =>{
        setPet({...initialStatePet});
    }

     {/*Guarda los input del usuario en la zona de mascota*/}
    const handleDataPet = (e) => {
        setPet({
            ...pet, [e.target.name]: e.target.value
        })
    }

    const add = (e) => {
        console.log("En construccion...");
    }

    const showData = () =>{
        console.log(user);
        console.log(pet);
    }

    return(
        <div className="container">
            <h5 className="text-black mt-5">Fecha de la consulta: (Automatica)</h5>
            {/*DATOS DEL USUARIO*/}
            <div className="mt-5 mx-auto">
                {
                    !userDone ? (
                            <button className="btn btn-danger btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#userSection" aria-expanded="false" aria-controls="userSection" onClick={() =>{if(user.name && user.idCard && user.tel && pet.name && pet.breed){setUserDone(true)}else setUserDone(false)}}>Datos Paciente</button>
                    ) : (
                        <button className="btn btn-success btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#userSection" aria-expanded="false" aria-controls="userSection" onClick={() =>{if(user.name && user.idCard && user.tel && pet.name && pet.breed){setUserDone(true)}else setUserDone(false)}}>Agregar Usuario</button>
                    )
                }
                <div className="collapse p-3" id="userSection">
                    {/*DATOS DE LA MASCOTA*/}
                    <ReviewPet handleDataPet={handleDataPet} pet =  {pet} handleImg = {handleImg} fileHidenInput = {fileHidenInput} handleClick = {handleClick}/>
                    {/*Datos del usuario*/}
                    <div className="p-3 m-3 card-shadow">
                        <h4 className="mt-5 text-black">Tutor</h4>
                        <div className="form-group row w-100 mx-auto">
                            <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                            <input type="text" name="name" value={user.name || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} required/>
                            <label type="number" className= "text-black col-sm-6 col-6 col-md-5">Cedula</label>
                            <input name="idCard" value={user.idCard || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} required/>
                            <label className= "text-black col-sm-6 col-6 col-md-5">Telefono</label>
                            <input name="tel" value={user.tel || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)}required/>
                            <label className= "text-black col-sm-6 col-6 col-md-5">adress</label>
                            <input name="adress" value={user.adress || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} />
                            <label className= "text-black col-sm-6 col-6 col-md-5">Correo</label>
                            <input name="email" value={user.email || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} />
                            <label className= "text-black col-sm-6 col-6 col-md-5">Ocupacion</label>
                            <input name="job" value={user.job || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)}/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/*HISOTIRA CLINICA*/}
            <div className="mt-1 mx-auto">
                {
                    !anamnesisDone ? (
                        <button className="btn btn-danger btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#anamnesisSection" aria-expanded="false" aria-controls="anamnesisSection">Anamnesis</button>
                    ):(
                        <button className="btn btn-success btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#anamnesisSection" aria-expanded="false" aria-controls="anamnesisSection">Anamnesis</button>
                    )
                }
                <div className="collapse" id="anamnesisSection">
                    <Anamnesis/>
                </div>
            </div>

            {/*Examen clinico*/}
            <div className="mt-1 mx-auto">
                {
                    !examenClinDone ? (
                        <button className="btn btn-danger btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#examenClinico" aria-expanded="false" aria-controls="examenClinico">Examen clínico</button>
                    ):(
                        <button className="btn btn-success btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#examenClinico" aria-expanded="false" aria-controls="examenClinico">Examen clínico</button>
                    )
                }
                <div className="collapse" id="examenClinico">
                    <ExamenClinico/>
                </div>
            </div>

            <button type="submit" className="mt-5 btn btn-large btn-info" onClick={() => showData()}>Enviar</button>
        </div>
    )
}