import React, { useRef, useState } from "react"
import ProfilePictureDefault from "../../../Assets/Icons/profile.png"
import "../../../App.css"

export default function AddUser(props){
    const mode = props.data;
    const fileHidenInput = useRef("");

    {/*user*/}
    const [user, setUser] = useState({
        name:"",
        idCard:"", 
        email:"", 
        tel:"", 
        adress:"", 
        job:"", 
        picture:""
    });

    {/*MASCOTA*/}
    const [pet, setPet] = useState({
        petName: "",
        kind: "",
        breed: "",
        color: "",
        size: "",
        age: "",
        gender: "",
        reproductiveStatus: "",
        weigth: ""
    });

    const handleImg = e => {
        if(e.target.files.length){
            setUser({...user, picture:URL.createObjectURL(e.target.files[0])});
        }
    }

    const handleDataUser = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }

    const handleDataPet = (e) => {
        setPet({
            ...pet, [e.target.name]: e.target.value
        })
    }
    
    const handleClick = e =>{
        fileHidenInput.current.click();
    }

    const showData = () =>{
        console.log(user);
        console.log(pet);
    }

    if(mode == "add"){
        return(
            <div className="container mx-auto mt-5">
                <div>
                    <h1 className="text-black">Agregar usuario</h1>
                </div>
                {user.picture ? (
                    <div>
                        <div className="container col-12 mx-auto">
                            <img src={user.picture} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                        </div>
                        <div className="container col-12 mx-auto">
                            <button className="m-1 btn btn-success btn-sm mx-auto" onClick={handleClick}>cambiar foto</button>
                            <input type="file" className="d-none" onChange={handleImg} placeholder="Foto" ref={fileHidenInput}/>
                        </div>
                    </div>

                    ) : (
                    
                        <div>
                            <div className="container col-12 mx-auto">
                                <img src={ProfilePictureDefault} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                            </div>
                            <div className="container col-12 mx-auto">
                                <button className="m-1 btn btn-primary btn-sm mx-auto" onClick={handleClick}>Elegir foto</button>
                                <input type="file" className="mx-auto center btn btn-primay d-none" onChange={handleImg} placeholder="Foto" ref={fileHidenInput}/>
                            </div>
                        </div>
                )}

                {/*DATOS user*/}
                <div className=" p-3">
                    <h4 className="mt-5 text-black">Tutor</h4>
                    <div className="form-group row w-100 mx-auto">
                        <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                        <input type="text" name="name" value={user.name || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} placeholder="Jorge Perez" required/>
                        <label type="number" className= "text-black col-sm-6 col-6 col-md-5">Cedula</label>
                        <input name="idCard" value={user.idCard || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} placeholder="identificacion" required/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Telefono</label>
                        <input name="tel" value={user.tel || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} placeholder="555-555-555-55" required/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">adress</label>
                        <input name="adress" value={user.adress || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} placeholder="Bogota, Usaquen"/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Correo</label>
                        <input name="email" value={user.email || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} placeholder="jorge.perez@gmail.com"/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Ocupacion</label>
                        <input name="job" value={user.job || ""} className="form-control col-sm-6 col-6 col-md-7 " onChange={e => handleDataUser(e)} placeholder="Ingeniero"/>

                    </div>
                </div>

                {/*DATOS DEL user*/}
                <div className="mt-3 p-3">
                    <h4 className="mb-5 mt-3 text-black">Paciente</h4>
                    <div className="form-group row ww-100 mx-auto">
                        <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                        <input name="petName" value={pet.petName} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Lucas" required/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Especie</label>
                        <input name="kind" value={pet.kind} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Felino"/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Raza</label>
                        <input name="breed" value={pet.breed} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Criollo"/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Color</label>
                        <input name="color" value={pet.color} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Negro" />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Tamaño</label>
                        <input name="size" value={pet.size} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Grande" />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Edad</label>
                        <input name="age" value={pet.age} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="3 meses" />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Sexo</label>
                        <input name="gender" value={pet.gender} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="macho/hembra" />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Estado Reproductivo</label>
                        <input name="reproductiveStatus" value={pet.reproductiveStatus} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Operado" />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Peso</label>
                        <input name="weigth" value={pet.weigth} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="25kg"/>
                    </div>
                </div>

                <button className="mt-5 btn btn-sm btn-primary mx-auto" onClick={showData}>Enviar</button>
            </div>
        )    
    }
}