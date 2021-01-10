import React, { useEffect, useRef, useState } from "react"
import ReviewPet from "./ReviewPet"
import ProfilePictureDefault from "../../Assets/Icons/profile.png"
import Anamnesis from "./Anamnesis";
import ExamenClinico from "./ExamenClinico";
import UserService from "../Services/UserService";
import FormService from "../Services/FormService";

export default function ControlMedico(props){
    
    const [msg, setMsg] = useState("");
    {/*MASCOTA*/}
    const initialStatePet = {name: "", kind: "", breed: "", color: "", size: "", age: "", birthday:"", gender: "", reproductiveStatus: "", weigth: "", picture:""};
    const [pet, setPet] = useState(null);
    {/*user*/}
    const initialStateUser = {name:"", idCard:"", email:"", tel:"", adress:"", job:"", pets:[]};
    const [user, setUser] = useState(initialStateUser);
    const [id, setId] = useState(-1);
    {/*Anamnesis*/}
    const [anamnesis, setAnamnesis] = useState("");
    {/*Examen*/}
    const [examen, setExamen] = useState("");

    {/*Es para simular el click en el input type="file" pero personalizado (como button)*/}
    const fileHidenInput = useRef("");
    const handleClick = e =>{
        fileHidenInput.current.click();
    }
    
    const handleImg = e => {
        if(e.target.files.length){
            setPet({...pet, picture:URL.createObjectURL(e.target.files[0])});
        }
    }

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

    const handleAnamnesis = (e) =>{
        setAnamnesis({
            ...anamnesis, [e.target.name]:e.target.value
        });
    }

    const dataInfo = {
        handleDataPet: handleDataPet,
        handleImg:handleImg,
        handleClick: handleClick,
        pet:pet,
        fileHidenInput: fileHidenInput,
        user:user
    }


    const findUserById = (id)=>{
        //Ajustar usuario
        UserService.findUserById(id)
        .then(res =>{
            setUser(res.val());
        })
        .catch(error =>{
            setMsg("El usuario no existe");
            setUser(null);
            console.log(error);
        });
    }

    return(
        <div className="fluid-container">

            <div className="">
                <label className="text-black mr-3 col-12">Documento de usuario</label>
                <input className="mr-3" type="number" onChange={(e) => setId(e.target.value)}/>
                <button className="btn-sm button-primary" onClick={() => findUserById(id)}>Buscar</button>
            </div>

            {/*Despliega las mascotas del usuario*/}
            <div className="row w-100 col-12">
                {
                    user && user.pets && user.pets.map(current =>{
                        if(!pet){
                            return(
                                <div className="m-3 col-12 col-sm-4 col-md-4 col-xs-4" key={current.name}>
                                    <div className="card p-3">
                                        <img className="mx-auto profile-img" src={current.picture ? current.picture : ProfilePictureDefault}/>
                                        <div className="card-body">
                                            <strong className="h-6 text-black card-title">{current.name}</strong>
                                            <h6 className="text-black">{current.kind}</h6>
                                            <h6 className="text-black">{current.breed}</h6>
                                            <h6 className="text-black">{current.color}</h6>
                                            <button className="button-primary" onClick={() => setPet(current)}>Seleccionar</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            {/*Muestra la informacion del usuario*/}
            <div>
                <RenderInfo data = {dataInfo} handleAnamnesis = {handleAnamnesis} anamnesis = {anamnesis}/>
            </div>
            

        </div>
    )
}

//Las props llegan vacias, no esta bien implementado el UseEffect
const RenderInfo = (props) =>{
    const handleDataPet = props.data.handleDataPet;
    const pet = props.data.pet;
    const handleImg = props.data.handleImg;
    const handleClick = props.data.handleClick;
    const fileHidenInput = props.data.fileHidenInput;
    const handleAnamnesis = props.handleAnamnesis;
    const anamnesis = props.anamnesis;

    if(pet){
        return(
            <div>
                <h4 className="text-black">Fecha de control(automatica)</h4>
                <ReviewPet handleDataPet={handleDataPet} pet = {pet} handleImg = {handleImg} fileHidenInput = {fileHidenInput} handleClick = {handleClick}/>
                <Anamnesis anamnesis = {anamnesis} handleAnamnesis = {handleAnamnesis}/>
                <ExamenClinico/>
                <button className="button-primary btn-md m-3" onClick={() => console.log("En construccion")}>Guardar</button>
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