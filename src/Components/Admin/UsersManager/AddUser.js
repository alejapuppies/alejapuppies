import React, { useRef, useState } from "react"
import ProfilePictureDefault from "../../../Assets/Icons/profile.png"
import "../../../App.css"

export default function AddUser(props){
    const mode = props.data;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [picture, setPicture] = useState("");
    const fileHidenInput = useRef("");

    const handleImg = e => {
        if(e.target.files.length){
            setPicture(URL.createObjectURL(e.target.files[0]));
        }
    }
    
    const handleClick = e =>{
        fileHidenInput.current.click();
    }

    if(mode == "add"){
        return(
            <div className="container mx-auto mt-5">
                <div>
                    <h1 className="text-black">Agregar usuario</h1>
                </div>
                {picture ? (
                    <div>
                        <div className="container col-12 mx-auto">
                            <img src={picture} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
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
                <div className="mx-auto mt-5 row w-100 form-group">
                    <label className="text-black col-12 col-sm-6 col-xs-6 col-md-6">Nombre y apellido:</label>
                    <input className="form-control col-12 col-sm-6 col-xs-6 col-md-6" onChange={e => setName(e.target.value)} placeholder="Jorge Perez"/>
                    <label className="text-black col-12 col-sm-6 col-xs-6 col-md-6">Correo electronico:</label>
                    <input type="email" className="form-control col-12 col-sm-6 col-xs-6 col-md-6" onChange={e => setEmail(e.target.value)} placeholder="jorgito@gmail.com"/>
                    <label className="text-black col-12 col-sm-6 col-xs-6 col-md-6">Telefono:</label>
                    <input className="form-control col-12 col-sm-6 col-xs-6 col-md-6" onChange={e => setTel(e.target.value)} placeholder="55555555555"/>
                    
                </div>
                <button className="mt-5 btn btn-sm btn-primary mx-auto">Enviar</button>
            </div>
        )    
    }
}