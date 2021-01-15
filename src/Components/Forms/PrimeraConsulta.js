import React, {useRef, useState} from "react"
import AddUser from "../Admin/UsersManager/AddUser"
import ProfilePictureDefault from "../../Assets/Icons/profile.png"
import Anamnesis from "./Anamnesis"
import ExamenClinico from "./ExamenClinico"
import ReviewPet from "./ReviewPet"
import FormService from "../Services/FormService"
import Modal from "../Containers/Modal"
import UserService from "../Services/UserService"

export default function PrimeraConsulta(){

    const [msg, setMsg] = useState("");

    {/*Es para simular el click en el input type="file" pero personalizado (como button)*/}
    const fileHidenInput = useRef("");
    const handleClick = e =>{
        fileHidenInput.current.click();
    }

    const [userDone, setUserDone] = useState(false);
    const [anamnesisDone, setAnamnesisDone] = useState(false);
    const [examenClinDone, setExamenClin] = useState(false);

    {/*Anamnesis*/}
    const [anamnesis, setAnamnesis] = useState("");
    const handleAnamnesis = (e) =>{
        setAnamnesis({
            ...anamnesis, [e.target.name]: e.target.value
        });
    }

    {/*Examen Clinico*/}
    const [examen, setExamen] = useState("");
    const handleExamen = (e) =>{
        setExamen({
            ...examen, [e.target.name]: e.target.value
        });
    }
    
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
    const handleDataPet = (e) => {
       setPet({
           ...pet, [e.target.name]: e.target.value
       })
    }

    {/*Limpiar datos*/}
    const reset = () =>{
        setPet(initialStatePet);
        setUser(initialStateUser);
        setAnamnesis("");
        setExamen("");
    }

    const checkData = () =>{
        if(user.idCard == "" || user.email == "" || user.tel == ""){
            console.log("Error");
        }else{
            add();
        }
    }

    {/*Push Data*/}
    const add = () => {
        let dataUser = {
            name:user.name, 
            idCard:user.idCard, 
            email:user.email, 
            tel:user.tel, 
            adress:user.adress, 
            job:user.job,
            pets:pet
        }

        let data = {
            user: user,
            pet: pet,
            anamnesis: anamnesis,
            examen:examen
        }

        UserService.addUser(dataUser)
        .then(res =>{
            FormService.addFirstConsulting(data)
            .then(res => {
                setMsg("Datos guardados")
                reset();
            })
            .catch(error =>{
                setMsg("Hubo un error, intente nuevamente");
                console.log(error);
            })
            
        }).catch(error =>{
            setMsg("Hubo un error, intente nuevamente");
            console.log(error);
        })
    }

    const showData = () =>{
        console.log(user);
        console.log(pet);
        console.log(anamnesis);
        console.log(examen);
    }

    return(
        <div className="fluid-container">
            <h5 className="text-black mt-5">Fecha de la consulta: (Automatica)</h5>
            {/*DATOS DEL USUARIO*/}
            <div className="mt-5 mx-auto">
                {
                    !userDone ? (
                            <button style={{backgroundColor:"#83AED4"}} className="btn col-12 col-sm-8 col-md-8 col-xs-8 dropdown-toggle mx-auto" type="button" data-toggle="collapse" data-target="#userSection" aria-expanded="false" aria-controls="userSection" onClick={() =>{if(user.name && user.idCard && user.tel && pet.name && pet.breed){setUserDone(true)}else setUserDone(false)}}>Datos Paciente</button>
                    ) : (
                        <button style={{backgroundColor:"#6ED493"}} className="btn col-12 col-sm-8 col-md-8 col-xs-8  dropdown-toggle" type="button" data-toggle="collapse" data-target="#userSection" aria-expanded="false" aria-controls="userSection" onClick={() =>{if(user.name && user.idCard && user.tel && pet.name && pet.breed){setUserDone(true)}else setUserDone(false)}}>Agregar Usuario</button>
                    )
                }
                <div className="collapse" id="userSection">
                    {/*DATOS DE LA MASCOTA*/}
                    <ReviewPet handleDataPet={handleDataPet} pet =  {pet} handleImg = {handleImg} fileHidenInput = {fileHidenInput} handleClick = {handleClick}/>
                    {/*Datos del usuario*/}
                    <div className="mt-1 p-3 mb-3 card-shadow">
                        <h4 className="text-black">Tutor</h4>
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
                        <button style={{backgroundColor:"#83AED4"}} className="btn col-12 col-sm-8 col-md-8 col-xs-8  dropdown-toggle" type="button" data-toggle="collapse" data-target="#anamnesisSection" aria-expanded="false" aria-controls="anamnesisSection">Anamnesis</button>
                    ):(
                        <button style={{backgroundColor:"#6ED493"}} className="btn col-12 col-sm-8 col-md-8 col-xs-8  dropdown-toggle" type="button" data-toggle="collapse" data-target="#anamnesisSection" aria-expanded="false" aria-controls="anamnesisSection">Anamnesis</button>
                    )
                }
                <div className="collapse" id="anamnesisSection">
                    <Anamnesis handleAnamnesis = {handleAnamnesis}/>
                </div>
            </div>

            {/*Examen clinico*/}
            <div className="mt-1 mx-auto">
                {
                    !examenClinDone ? (
                        <button style={{backgroundColor:"#83AED4"}} className="btn col-12 col-sm-8 col-md-8 col-xs-8  dropdown-toggle" type="button" data-toggle="collapse" data-target="#examenClinico" aria-expanded="false" aria-controls="examenClinico">Examen clínico</button>
                    ):(
                        <button style={{backgroundColor:"#6ED493"}} className="btn col-12 col-sm-8 col-md-8 col-xs-8  dropdown-toggle" type="button" data-toggle="collapse" data-target="#examenClinico" aria-expanded="false" aria-controls="examenClinico">Examen clínico</button>
                    )
                }
                <div className="collapse" id="examenClinico">
                    <ExamenClinico handleExamen = {handleExamen}/>
                </div>
            </div>

            <button type="submit" className="mt-5 button-primary btn-large" onClick={() => checkData()} data-toggle="modal" data-target="#exampleModal">Enviar</button>                
            <Modal title = "Primera Consulta" msg = {msg}/>

        </div>
    )
}