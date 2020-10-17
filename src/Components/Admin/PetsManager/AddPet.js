import React, { useState } from "react"

export default function AddPet(props){

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
        e.preventDefault();
        if(pet.name == "" || pet.breed == ""){
            setDone(false);
            console.log("error" + done);
        }
        else{ 
            setDone(true);
            props.addPet(pet);
            props.setVisible(false);
            setPet(initialStatePet);
        }
    }
    
    if(props.visible){
            return(
                <div className="border-black p-3">
                    <h4 className="mb-5 mt-3 text-black">Mascota</h4>
                    <div className="form-group row ww-100 mx-auto">
                        <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                        <input name="name" value={pet.petName} onChange={e => handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " placeholder="Lucas" required/>
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
                    <button type="submit" className="m-1 mx-auto btn rounded-pill btn-sm btn-info col-12 col-sm-2 col-xs-2 col-md-2" onClick={(e) => add(e)}  data-toggle="modal" data-target="#exampleModal">Agregar</button>

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