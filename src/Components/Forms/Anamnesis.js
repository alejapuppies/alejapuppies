import React, { useState } from "react"

export default function Anamnesis(props){

    const [anamnesis, setAnamnesis] = useState(props.anamnesis);
    
    const handleData = (e) =>{
        props.handleAnamnesis(e);
    }

    return(
        <div className="p-3 m-3 card-shadow">
            <h4 className="mt-5 text-black">ANAMNESIS</h4>
            <div className="form-group row w-100 mx-auto">
                <label className= "text-black col-sm-6 col-6 col-md-5">Origen</label>
                <input name = "origen" value = { anamnesis ? anamnesis.origen : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Lugar de vivienda</label>
                <input name = "vivienda" value = {anamnesis ? anamnesis.vivienda : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Indoor/Outdoor</label>
                <input name = "indoor" value = {anamnesis ? anamnesis.indoor : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7"/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Viajes</label>
                <input name = "viajes" value = {anamnesis ? anamnesis.viajes : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7"/>
                <label className = "text-black col-sm-6 col-6 col-md-5">Presencia de ectoparasitos</label>
                <input name = "ectoparasitos" value = {anamnesis ? anamnesis.ectoparasitos : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7"/>
                {/*Alimentacion*/}
                <strong className= "text-black col-sm-6 col-6 col-md-5">Alimentacion</strong>
                <input name = "alimentacion" value = {anamnesis ? anamnesis.alimentacion : ""} onChange ={(e) => handleData(e)} type="text" className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Tipo de comida</label>
                <input name = "comida" value = {anamnesis ? anamnesis.comida : ""} onChange ={(e) => handleData(e)} type="text" className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Racion diaria</label>
                <input name = "racion" value = {anamnesis ? anamnesis.racion : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Frecuencia alimentacion</label>
                <input name = "frecuencia" value = {anamnesis ? anamnesis.frecuencia : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Tiempo de consumo</label>
                <input name = "tiempo" value = {anamnesis ? anamnesis.tiempo : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Comentarios</label>
                <input name = "comentarios" value = {anamnesis ? anamnesis.comentarios : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Enfermedades anteriores</label>
                <input name = "enfermedades" value = {anamnesis ? anamnesis.enfermedades : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Eventos nocivos</label>
                <input name = "eventos" value = {anamnesis ? anamnesis.eventos : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Tratamiento previo</label>
                <input name = "tratamiento" value = {anamnesis ? anamnesis.tratamiento : ""} onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
            </div>

            {/*Motivo consulta*/}
            <div className="w-100 mx-auto">
                <h4 className="mt-5 col-12 text-black">Motivo consulta:</h4>
                <textarea name="motivo" value = {anamnesis ? anamnesis.motivo : ""} onChange={(e) => {handleData(e)}} className="mt-5 col-12 mx-auto" type="text-area"/>
            </div>

        </div>
    )
}