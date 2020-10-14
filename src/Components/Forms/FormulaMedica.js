import React, { useState } from "react"

export default function FormulaMedica(){
    {/*nMedi = Numero de medicamentos
      nObs = Numero de observaciones */}
    const [nMedi, setnMedi] = useState(0);
    const [nObs, setnObs] = useState(0);

    function setValue(data){
        if(nMedi >0 && data == 0){
            setnMedi(nMedi-1);
        }
        else if(nObs >0 && data == 1){
            setnObs(nObs-1);
        }
    }

    return(
        <div className="container mx-auto mt-5 border-black p-3">
            <h1 className="text-black">Formula Medica</h1>

            {/*Fecha de radicacion*/}
            <div className="mt-5 mx-auto mb-5">
                <strong className="text-black col-12 col-sm-6 col-md-3">Fecha:</strong>
                <input type="date" className="form-control mx-auto col-12 col-sm-6 col-md-3" placeholder="Fecha" required/>
            </div>

            {/*Datos del paciente*/}
            <div className="row w-100 col-12">
                <div className="col-12 col-sm-6 col-md-6 row mx-auto">
                    <strong className="text-black col-12 col-sm-6 col-md-6">Paciente:</strong>
                    <input className="text-black col-12 col-sm-6 col-md-6" placeholder="Balu" required/>
                    <strong className="text-black col-12 col-sm-6 col-md-6">Especie:</strong>
                    <input className="text-black col-12 col-sm-6 col-md-6" placeholder="Canino"/>
                    <strong className="text-black col-12 col-sm-6 col-md-6">Tutor(a):</strong>
                    <input className="text-black col-12 col-sm-6 col-md-6" placeholder="Alejandra Salcedo" required/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 row mx-auto">
                    <strong className="text-black col-12 col-sm-6 col-md-6">Edad:</strong>
                    <input className="text-black col-12 col-sm-6 col-md-6" placeholder="59 dias"/>
                    <strong className="text-black col-12 col-sm-6 col-md-6">Raza:</strong>
                    <input className="text-black col-12 col-sm-6 col-md-6" placeholder="Pastor Ganadero"/>
                    <strong className="text-black col-12 col-sm-6 col-md-6">Peso:</strong>
                    <input className="text-black col-12 col-sm-6 col-md-6" placeholder="2,6 Kg"/>
                </div>
            </div>


            {/*Medicamentos y administracion*/}
            <h4 className="mt-5 mx-auto text-black">Recetas medicas:</h4>
            <div className="container mt-3 col-12 row">
                <h6 className="text-black col-12">Medicamento:<input className="form-control col-12" type="text" placeholder="losartan"/></h6>
                <h6 className="text-black col-12">Administracion:<input className="form-control col-12" type="text" placeholder="3 veces al dia"/></h6>
                <hr className="styled-hr"/>
            </div>

            <MedicamentosManager cant = {nMedi}/>

            <div className="container mt-5">
                <button className="btn btn-success m-3" onClick={() => setnMedi(nMedi + 1)}>Añadir Medicamento</button>
                <button className="btn btn-danger m-3" onClick={() => setValue(0)}>Eliminar Medicamento</button>
            </div>
            

            {/*Recomendaciones*/}
            <h4 className="text-black mt-5">Recomendaciones:</h4>
            <div className="container mt-3 col-12">
                <span className="text-black col-2">&bull;<input className="w-100 col-10" type="text" placeholder="Observaciones..."/></span>
            </div>

            <ObservacionesManager cant ={nObs}/>

            <div className="container mt-5">
                <button className="btn btn-success m-3" onClick={() => setnObs(nObs + 1)}>Añadir Observacion</button>
                <button className="btn btn-danger m-3" onClick={() => setValue(1)}>Eliminar Observacion</button>
            </div>

            <button type="submit" className="mt-5 btn btn-info mx-auto">Guardar</button>
        </div>
    )
}

export function MedicamentosManager(props){
    const cant = props.cant;
    let cards = [];
    for (var i = 0; i < cant; i++) {
        cards.push(
            <div className="container mt-5 col-12 row" key={i}>
                <h6 className="text-black col-12">Medicamento:<input className="form-control col-12" type="text" placeholder="losartan"/></h6>
                <h6 className="text-black col-12">Administracion:<input className="form-control col-12" type="text" placeholder="3 veces al dia"/></h6>
                <hr className="styled-hr"/>
            </div>
        );
    }

    return(
        <div>
            {cards}
        </div>
    )
}

export function ObservacionesManager(props){
    const cant = props.cant;
    let cards = [];
    for (var i = 0; i < cant; i++) {
        cards.push(
            <div className="container mt-1 col-12" key={i}>
                <span className="text-black col-2">&bull;<input className="w-100 col-10" type="text" placeholder="Observaciones..."/></span>
            </div>
        );
    }

    return(
        <div>
            {cards}
        </div>
    )
}