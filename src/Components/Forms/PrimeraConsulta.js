import React, {useRef, useState} from "react"
import AddUser from "../Admin/UsersManager/AddUser"
import ProfilePictureDefault from "../../Assets/Icons/profile.png"
import Anamnesis from "./Anamnesis"
import ExamenClinico from "./ExamenClinico"

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
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:"", picture:""};
    const [user, setUser] = useState(initialStateUser);

    {/*Guarda los input del usuario en los datos*/}
    const handleDataUser = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }
    const handleImg = e => {
        if(e.target.files.length){
            setUser({...user, picture:URL.createObjectURL(e.target.files[0])});
        }
    }

    {/*MASCOTA*/}
    const initialStatePet = {name: "", kind: "", breed: "", color: "", size: "", age: "", gender: "", reproductiveStatus: "", weigth: ""};
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

    return(
        <div className="container">
            <h5 className="text-black mt-5">Fecha de la consulta: (Automatica)</h5>
            {/*DATOS DEL USUARIO*/}
            <div className="mt-5 mx-auto">
                {
                    !userDone ? (
                            <button className="btn btn-danger btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#userSection" aria-expanded="false" aria-controls="userSection">Datos Paciente</button>
                    ) : (
                        <button className="btn btn-success btn-block dropdown-toggle" type="button" data-toggle="collapse" data-target="#userSection" aria-expanded="false" aria-controls="userSection">Agregar Usuario</button>
                    )
                }
                <div className="collapse border-black p-3" id="userSection">
                    {/*Imagen de perfil*/}
                    {user.picture ? (
                    <div>
                        <div className="container col-12 mx-auto">
                            <img src={user.picture} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                        </div>
                        <div className="container col-12 mx-auto">
                            <button className="m-1 btn rounded-pill btn-success btn-sm mx-auto" onClick={handleClick}>cambiar foto</button>
                            <input type="file" className="d-none" onChange={handleImg} ref={fileHidenInput}/>
                        </div>
                    </div>
                    ) : (
                    
                        <div>
                            <div className="container col-12 mx-auto">
                                <img src={ProfilePictureDefault} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                            </div>
                            <div className="container col-12 mx-auto">
                                <button className="m-1 rounded-pill btn btn-primary btn-sm mx-auto" onClick={handleClick}>Elegir foto</button>
                                <input type="file" className="mx-auto center btn btn-primay d-none" onChange={handleImg} ref={fileHidenInput}/>
                            </div>
                        </div>
                    )}

                    {/*Datos del usuario*/}
                    <div className=" p-3">
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

                    {/*DATOS DE LA MASCOTA*/}
                    <div className="p-3">
                        <h4 className="mb-5 mt-3 text-black">Mascota</h4>
                        <div className="form-group row ww-100 mx-auto">
                            <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                            <input name="name" value={pet.petName} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " required/>
                            <label className= "text-black col-sm-6 col-6 col-md-5">Especie</label>
                            <input name="kind" value={pet.kind} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                            <label className= "text-black col-sm-6 col-6 col-md-5">Raza</label>
                            <input name="breed" value={pet.breed} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                            <label className= "text-black col-sm-6 col-6 col-md-5">Color</label>
                            <input name="color" value={pet.color} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                            <label className= "text-black col-sm-6 col-6 col-md-5">Tamaño</label>
                            <input name="size" value={pet.size} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "  />
                            <label className= "text-black col-sm-6 col-6 col-md-5">Edad</label>
                            <input name="age" value={pet.age} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "  />
                            <label className= "text-black col-sm-6 col-6 col-md-5">Sexo</label>
                            <input name="gender" value={pet.gender} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                            <label className= "text-black col-sm-6 col-6 col-md-5">Estado Reproductivo</label>
                            <input name="reproductiveStatus" value={pet.reproductiveStatus} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                            <label className= "text-black col-sm-6 col-6 col-md-5">Peso</label>
                            <input name="weigth" value={pet.weigth} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
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

            <button type="submit" className="mt-5 btn btn-large btn-info">Enviar</button>
        </div>
    )
}