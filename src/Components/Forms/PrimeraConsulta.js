import React, {useState} from "react"
import ExamenClinico from "./ExamenClinico"

export default function PrimeraConsulta(){

    return(
        <form className="fluid-container">
            <h5 className="text-black mt-5">Fecha de la consulta:</h5>
            <input type="date" placeholder="Fecha consulta" required/>
            {/*DATOS DEL USUARIO*/}
            <h4 className="mt-5 text-black">RESEÑA</h4>
            <div className="w-100 row mx-auto">
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Nombre" required/>
                    <input type="text" className="form-control" placeholder="Especie" required/>
                    <input type="text" className="form-control" placeholder="Raza" required/>
                    <input type="text" className="form-control" placeholder="Color"/>
                    <input type="text" className="form-control" placeholder="Tamaño"/>
                </div>
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Edad"/>
                    <input type="text" className="form-control" placeholder="Sexo"/>
                    <input type="text" className="form-control" placeholder="Estado Reproductivo"/>
                    <input type="text" className="form-control" placeholder="Peso"/>
                    <input type="text" className="form-control" placeholder="Comentarios"/>
                </div>
            </div>

            {/*DATOS DE LA FAMILIA*/}
            <h4 className="mt-5 text-black">FAMILIA</h4>
            <div className="w-100 row mx-auto">
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Tutor 1" required/>
                    <input type="text" className="form-control" placeholder="Tutor 2"/>
                    <input type="text" className="form-control" placeholder="Direccion"/>
                    <input type="text" className="form-control" placeholder="Ocupacion"/>
                </div>
                <div className="form-group w-50">
                    <input type="tel" className="form-control" placeholder="Telefono" required/>
                    <input type="tel" className="form-control" placeholder="Telefono"/>
                    <input type="email" className="form-control" placeholder="Correo"/>
                    <input type="text" className="form-control" placeholder="Comentarios"/>

                </div>
            </div>

            {/*HISOTIRA CLINICA*/}
            <h4 className="mt-5 text-black">ANAMNESIS</h4>
            <div className="w-100 row mx-auto">
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Origen"/>
                    <input type="text" className="form-control" placeholder="Lugar de vivienda"/>
                    <input type="text" className="form-control" placeholder="Indoor/Outdoor"/>
                    <input type="text" className="form-control" placeholder="Ectoparasitos"/>
                    <input type="text" className="form-control" placeholder="Viajes"/>
                    <input type="text" className="form-control" placeholder="Enfermedades anteriores"/>
                    <input type="text" className="form-control" placeholder="Eventos nocivos"/>
                    <input type="text" className="form-control" placeholder="Tratamiento previo"/>                  

                </div>
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Evolucion"/>
                    <input type="text" className="form-control" placeholder="Estado de vacunacion"/>
                    <input type="text" className="form-control" placeholder="Convive otros animales"/>
                    <input type="text" className="form-control" placeholder="Control Electroparasitos"/>
                    <input type="text" className="form-control" placeholder="Ultima desparasitacion"/>  
                    <input type="text" className="form-control" placeholder="Fecha"/>
                    <input type="text" className="form-control" placeholder="Fecha"/>
                    <input type="text" className="form-control" placeholder="Fecha"/>

                </div>
            </div>

            {/*Seccion de alimentos*/}
            <h6 className="text-black">Alimentacion</h6>
            <div className="w-100 row mx-auto">
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Tipo de comida"/>
                    <input type="text" className="form-control" placeholder="Frecuencia alimentacion"/>

                </div>
                <div className="form-group w-50">
                    <input type="text" className="form-control" placeholder="Racion diara"/>
                    <input type="text" className="form-control" placeholder="Tiempo de consumo"/>

                </div>
                <div className="form-group w-100">
                    <textarea type="text" className="form-control text-center" placeholder="Comentarios adicionales"/>
                </div>
            </div>

            {/*Motivo consulta*/}
            <div className="row w-100">
                <h4 className="mt-5 col-sm-6 text-black">Motivo consulta:</h4>
                <textarea className="mt-5 col-sm-6" type="text-area" placeholder="comentarios..."/>
            </div>

            <ExamenClinico/>

            <button type="submit" className="mt-5 btn btn-large btn-info">Enviar</button>
        </form>
    )
}