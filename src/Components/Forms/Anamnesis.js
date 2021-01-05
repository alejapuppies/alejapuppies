import React, { useState } from "react"

export default function Anamnesis(props){
    
    const handleData = (e) =>{
        props.handleAnamnesis(e);
    }

    return(
        <div className="p-3 m-3 card-shadow">
            <h4 className="mt-5 text-black">ANAMNESIS</h4>
            <div className="form-group row w-100 mx-auto">
                <label className= "text-black col-sm-6 col-6 col-md-5">Origen</label>
                <input name = "origen" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Lugar de vivienda</label>
                <input name = "vivienda" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Indoor/Outdoor</label>
                <input name = "indoor" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7"/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Viajes</label>
                <input name = "viajes" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7"/>
                <label className = "text-black col-sm-6 col-6 col-md-5">Presencia de ectoparasitos</label>
                <input name = "ectoparasitos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7"/>
                {/*Alimentacion*/}
                <strong className= "text-black col-sm-6 col-6 col-md-5">Alimentacion</strong>
                <input name = "alimentacion" onChange ={(e) => handleData(e)} type="text" className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Tipo de comida</label>
                <input name = "comida" onChange ={(e) => handleData(e)} type="text" className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Racion diaria</label>
                <input name = "racion" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Frecuencia alimentacion</label>
                <input name = "frecuencia" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Tiempo de consumo</label>
                <input name = "tiempo" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Comentarios</label>
                <input name = "comentarios" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Enfermedades anteriores</label>
                <input name = "enfermedades" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Eventos nocivos</label>
                <input name = "eventos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Tratamiento previo</label>
                <input name = "tratamiento" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
            </div>

            {/*Motivo consulta*/}
            <div className="w-100 mx-auto">
                <h4 className="mt-5 col-12 text-black">Motivo consulta:</h4>
                <textarea name="motivo" onChange={(e) => {handleData(e)}} className="mt-5 col-12 mx-auto" type="text-area"/>
            </div>

        </div>
    )
}