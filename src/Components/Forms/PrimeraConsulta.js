import React, {useState} from "react"
import ExamenClinico from "./ExamenClinico"

export default function PrimeraConsulta(){

    return(
        <form className="container">
            <h5 className="text-black mt-5">Fecha de la consulta:</h5>
            <input type="date" placeholder="Fecha consulta" required/>
            {/*DATOS DEL USUARIO*/}
            <div className="mt-5 border-black p-3">
                <h4 className="mb-5 mt-3 text-black">RESEÑA</h4>
                <div className="form-group row ww-100 mx-auto">
                    <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Lucas" required/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Especie</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Felino"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Raza</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Criollo"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Color</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Negro" />
                    <label className= "text-black col-sm-6 col-6 col-md-5">Tamaño</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Grande" />
                    <label className= "text-black col-sm-6 col-6 col-md-5">Edad</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="3 meses" />
                    <label className= "text-black col-sm-6 col-6 col-md-5">Sexo</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="macho/hembra" />
                    <label className= "text-black col-sm-6 col-6 col-md-5">Estado Reproductivo</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Operado" />
                    <label className= "text-black col-sm-6 col-6 col-md-5">Peso</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="25kg"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Comentarios</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Comentarios..." />
                </div>
            </div>

            {/*DATOS DE LA FAMILIA*/}
            <div className="border-black p-3">
                <h4 className="mt-5 text-black">FAMILIA</h4>
                <div className="form-group row w-100 mx-auto">
                    <label className= "text-black col-sm-6 col-6 col-md-5">Tutor 1</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Jorge Perez" required/>
                    <label type="number" className= "text-black col-sm-6 col-6 col-md-5">Cedula</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="identificacion" required/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Telefono</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="555-555-555-55" required/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Tutor 2</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Andrea Macaro"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Telefono</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="555-555-555-55"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Direccion</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Bogota, Usaquen"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Correo</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="jorge.perez@gmail.com"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Ocupacion</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Ingeniero"/>

                </div>
            </div>

            {/*HISOTIRA CLINICA*/}
            <div className="border-black p-3">
                <h4 className="mt-5 text-black">ANAMNESIS</h4>
                <div className="form-group row w-100 mx-auto">
                    <label className= "text-black col-sm-6 col-6 col-md-5">Origen</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Origen"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Lugar de vivienda</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Lugar de vivienda"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Indoor/Outdoor</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Indoor/Outdoor"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Viajes</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Viajes"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Presencia de ectoparasitos</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Ectoparasitos"/>
                    {/*Alimentacion*/}
                    <strong className= "text-black col-sm-6 col-6 col-md-5">Alimentacion</strong>
                    <input type="text" className="form-control col-sm-6 col-6 col-md-7 " placeholder="Alimentacion"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Tipo de comida</label>
                    <input type="text" className="form-control col-sm-6 col-6 col-md-7 " placeholder="Tipo de comida"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Racion diaria</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Racion diaria"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Frecuencia alimentacion</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="2 horas / 3 horas"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Tiempo de consumo</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Tiempo de consumo"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Comentarios</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Comentarios adicionales"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Enfermedades anteriores</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Enfermedades anteriores"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Eventos nocivos</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Eventos nocivos"/>
                    <label className= "text-black col-sm-6 col-6 col-md-5">Tratamiento previo</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Tratamiento previo"/>

                </div>
            </div>

            {/*Motivo consulta*/}
            <div className="row w-100 mx-auto border-black p-3">
                <h4 className="mt-5 col-sm-6 text-black">Motivo consulta:</h4>
                <textarea className="mt-5 col-sm-6 mx-auto" type="text-area" placeholder="comentarios..."/>
            </div>

            {/*Examen clinico*/}
            <div>
                <ExamenClinico/>
            </div>

            <button type="submit" className="mt-5 btn btn-large btn-info">Enviar</button>
        </form>
    )
}