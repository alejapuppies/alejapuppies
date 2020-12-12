import React, { useRef, useState } from "react"
import "../../../App.css"
import UserService from "../../Services/UserService";
import AddPet from "../PetsManager/AddPet";

export default function AddUser(){
    
    const [done, setDone] = useState(false);
    const [msg, setMsg] = useState("Operacion completada");

    {/*user*/}
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:""};
    const [user, setUser] = useState(initialStateUser);

    {/*MASCOTA*/}
    const [visibleForm, setVisibleForm] = useState(false);
    const [pets, setPets] = useState([]);

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

    {/*Añadir mascota validada*/}
    const addPet = (pet) =>{
        if(pet.name != "" && pet.breed != ""){
            setPets([...pets, pet]);
            setDone(true);
        }
    }


    const checkData = (e)=>{
        e.preventDefault();
        addUser(e);
        setDone(true);  
        
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
            picture: user.picture,
            pets: pets
        }

        setDone(false);

        UserService.addUser(data)
        .then(res => {
            console.log("Usuario guardado");
            setPets([]);
            setDone(true);
            reset();
        })
        .catch(error =>{
            setDone(false);
            setMsg("Error al guardar el usuario");
            console.log(error);
        })
    }

    return(
        <div className="container mx-auto mt-5">
            <div>
                <h1 className="text-black">Agregar usuario</h1>
            </div>

            <div>
                {/*DATOS user*/}
                <div className="card-shadow p-3">
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

                    
                    <div className="mt-3 mx-auto">
                        <div className="">
                            <h4 className="text-black">Mascotas<button className="btn btn-sm" onClick={(e) => setVisibleForm(true)}><i className="fa fa-plus" ></i></button></h4>
                        </div>
                        {
                            pets.map(p =>{
                                return(
                                    <div key = {p.name} className="row w-100">
                                        <p className="text-black col-6">{p.name}</p>
                                        <p className="text-black col-6">{p.breed}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>


                {/*DATOS DE LA MASCOTA*/}
                <div>
                    <AddPet visible = {visibleForm} setVisible = {setVisibleForm} addPet={addPet}/>      
                </div>

                {/*Terminar*/}
                <div className="row w-100 mx-auto mt-5">
                    <button type="submit" className="m-1 mx-auto btn btn-sm btn-success col-12 col-sm-3 col-xs-3 col-md-3" onClick={(e) => checkData(e)} data-toggle="modal" data-target="#exampleModal">Guardar</button>
                    <button className="m-1 mx-auto btn btn-sm btn-danger col-12 col-sm-3 col-xs-3 col-md-3" type="reset" onClick={() => reset()}>Limpiar</button>
                </div>
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
                        {done ? "El usuario ha sido guardado" : msg}
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