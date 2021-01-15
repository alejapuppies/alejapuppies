import React, { useState } from "react"

export default function Medicamento(props){
    const initialStateMed = {name: "", descr:""}
    const[med, setMed] = useState(initialStateMed);
    const handleDataMedi = props.handleDataMedi;

    const saveMedi = () =>{
        handleDataMedi(med);
        setMed(initialStateMed);
    }

    function searchMedi(){
        console.log("Buscar medicamento");
    }

    const handleData = (e) =>{
        setMed({
            ...med, [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <button type="button" className="btn text-white" style={{backgroundColor:"#6ED493"}} data-toggle="modal" data-target="#exampleModalCenter">
            Agregar Medicamento
            </button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="mt-5 modal-title text-black" id="exampleModalLongTitle">Agregar Medicamento</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-auto">
                    <div className="container mt-3 col-12 row">
                        <h6  className="text-black col-6">Medicamento:<input name="name" value={med.name} className="form-control col-12" type="text" onChange={(e) => handleData(e)} /></h6>
                        <h6 className="text-black col-6">administración:<input name="descr" value={med.descr} className="form-control col-12" type="text" onChange={(e) => handleData(e)} /></h6>
                        <button type="button" className="btn btn-success col-10 mx-auto" onClick={() => {searchMedi()}}>Buscar</button>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {saveMedi()}}>Agregar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}