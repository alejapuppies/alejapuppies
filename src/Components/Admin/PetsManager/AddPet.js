import React, { useRef, useState } from "react"
import ProfilePictureDefault from "../../../Assets/Icons/profile.png"
import FileManager from "../../Services/FileManager";

export default function AddPet(props){

    {/*MASCOTA*/}
    const fileHidenInput = useRef("");
    const initialStatePet = {name: "", kind: "", breed: "", color: "", size: "", age: "", birthday:"", gender: "", reproductiveStatus: "", weigth: "", picture:"", urlPic:""};
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

    {/*Imagen de la mascota */}
    const handleImg = e => {
        if(e.target.files.length){
            setPet({...pet, picture:e.target.files[0]});
        }
    }

    {/*Es para simular el click en el input type="file" pero personalizado (como button)*/}
    const handleClick = e =>{
        fileHidenInput.current.click();
    }

    const add = (e) => {
        e.preventDefault();
        if(pet.name == "" || pet.breed == ""){
            setDone(false);
            console.log("error" + done);
        }
        else{
            setDone(true);
            console.log(pet);
            props.addPet(pet);
            props.setVisible(false);
            setPet(initialStatePet);
        }
    }
    
    if(props.visible){
            return(
                <div className="p-3 card-shadow">
                    <h4 className="mb-5 mt-3 text-black">Mascota</h4>
                    {pet.picture ? (
                        <div>
                            <div className="container col-12 mx-auto">
                                <img src={URL.createObjectURL(pet.picture)} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                            </div>
                            <div className="container col-12 mx-auto">
                                <button className="m-1 rounded-pill button-primary btn-sm mx-auto" onClick={handleClick}>cambiar foto</button>
                                <input type="file" className="d-none" onChange={handleImg} ref={fileHidenInput}/>
                            </div>
                        </div>

                        ) : (
                        
                            <div>
                                <div className="container col-12 mx-auto">
                                    <img src={ProfilePictureDefault} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                                </div>
                                <div className="container col-12 mx-auto">
                                    <button className="m-1 rounded-pill button-primary btn-sm mx-auto" onClick={handleClick}>Elegir foto</button>
                                    <input type="file" className="mx-auto center btn btn-primay d-none" onChange={handleImg} ref={fileHidenInput}/>
                                </div>
                            </div>
                    )}

                    <div className="mt-3 form-group row w-100 mx-auto">
                        <label className= "text-black col-sm-6 col-6 col-md-5">Nombre*</label>
                        <input name="name" value={pet.petName} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " required/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Especie*</label>
                        <input name="kind" value={pet.kind} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Raza*</label>
                        <input name="breed" value={pet.breed} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Color</label>
                        <input name="color" value={pet.color} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Tamaño</label>
                        <input name="size" value={pet.size} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "  />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Edad</label>
                        <input name="age" value={pet.age} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "  />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Fecha de cumpleaños</label>
                        <input type="date" name="birthday" value={pet.birthday} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Sexo</label>
                        <input name="gender" value={pet.gender} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                        <label className= "text-black col-sm-6 col-6 col-md-5">Estado Reproductivo</label>
                        <input name="reproductiveStatus" value={pet.reproductiveStatus} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                        <label className= "text-black col-sm-6 col-6 col-md-5">Peso</label>
                        <input name="weigth" value={pet.weigth} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    </div>
                    <div className="row w-100">
                        <button type="submit" className="m-1 mx-auto btn rounded-pill btn-sm btn-info col-4 col-sm-2 col-xs-2 col-md-2" onClick={(e) => add(e)}  data-toggle="modal" data-target="#exampleModal">Agregar</button>
                        <button type="button" className="m-1 mx-auto btn rounded-pill btn-sm btn-danger col-4 col-sm-2 col-xs-2 col-md-2" onClick={(e) => props.setVisible(false)}>Cancelar</button>
                    </div>

                    {/*Modal para informar el estado de hacer push en database*/}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-black">Estado del usuario</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-black">
                                {(pet.name != "" && pet.breed != "") ? "Mascota agregada" : "Llena los campos obligatorios (Nombre, Raza)"}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setDone(false)}>Cerrar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}