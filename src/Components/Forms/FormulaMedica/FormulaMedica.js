import React, { useState } from "react";
import FormService from "../../Services/FormService";
import Medicamento from "./Medicamento";
import Modal from "../../Modal"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../../Pdf";

export default function FormulaMedica(){

    const initialStateForm = {date: "", idCard: "", name: "", pet: "", kind: "", breed: "", age: "", weight:"", obs: ""}
    const [form, setForm] = useState(initialStateForm);
    const [medi, setMedi] = useState([]);
    const [cont, setCont] = useState(0);
    const [msg, setMsg] = useState("");
    const [generate, setGenerate] = useState(false);

    const handleDataForm = (e) =>{
        setForm({
            ...form, [e.target.name]:e.target.value
        });
    }

    const handleDataMedi  = (med) =>{
        setMedi([
            ...medi, med
        ]);
    }

    const deleteMed = (e) => {
        const name = e.target.name;
        setMedi(medi.filter(item => item.name !== name));
    };

    const reset = () =>{
        setForm(initialStateForm);
        setMedi([]);
    }

    const checkData = () =>{
        if(form == initialStateForm || form.date == "" || form.name == "" || form.idCard == "" || form.pet == ""){
            setMsg("Llena todos los campos");
        }
        else{
            addForm();
        }
    }

    const addForm = () =>{
        let data = {
            date: form.date, 
            idCard: form.idCard, 
            name: form.name, 
            pet: form.pet, 
            kind: form.kind, 
            breed: form.breed, 
            age: form.age, 
            weight: form.weight, 
            obs: form.obs,
            medicines: medi
        }

        FormService.addMedicalConsulting(data)
        .then(res =>{
            if(res.data){
                setMsg("Datos guardados");
                reset();
            }else{
                setMsg("Error inesperado");
            }
        }).catch(error =>{
            setMsg("No se ha podido guardar la formula medica: " + error);
        });
    }

    return(
        <div className="container card-shadow mx-auto mt-5 p-3">
            <h1 className="text-black">Formula Medica</h1>

            {/*Fecha de radicacion*/}
            <div className="mt-5 mx-auto mb-5">
                <strong className="text-black col-12 col-sm-6 col-md-3">Fecha:</strong>
                <input name="date" value={form.date || ""} type="date" className="form-control mx-auto col-12 col-sm-6 col-md-3" onChange={(e) => handleDataForm(e)} required/>
            </div>

            {/*Datos del paciente*/}
            <div className="mt-3 mb-3">
                <strong className="text-black col-12 col-sm-4 col-md-4">N. Identificacion:</strong>
                <input name="idCard" value={form.idCard || ""} className="text-black col-12 col-sm-4 col-md-4"  onChange={(e) => handleDataForm(e)} required/>
            </div>
            <div className="row w-100 col-12">
                <div className="col-12 col-sm-6 col-md-6 row mx-auto">
                    <strong className="text-black col-12 col-sm-6 col-md-6">Paciente:</strong>
                    <input name="pet" value={form.pet || ""} className="text-black col-12 col-sm-6 col-md-6"  onChange={(e) => handleDataForm(e)} required/>
                    <strong className="text-black col-12 col-sm-6 col-md-6">Especie:</strong>
                    <input name="kind" value={form.kind || ""} className="text-black col-12 col-sm-6 col-md-6"  onChange={(e) => handleDataForm(e)} required/>
                    <strong className="text-black col-12 col-sm-6 col-md-6">Nombre Tutor(a):</strong>
                    <input name="name" value={form.name || ""} className="text-black col-12 col-sm-6 col-md-6" onChange={(e) => handleDataForm(e)} required/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 row mx-auto">
                    <strong className="text-black col-12 col-sm-6 col-md-6">Edad:</strong>
                    <input name="age" value={form.age || ""} className="text-black col-12 col-sm-6 col-md-6" onChange={(e) => handleDataForm(e)} />
                    <strong className="text-black col-12 col-sm-6 col-md-6">Raza:</strong>
                    <input name="breed" value={form.breed || ""} className="text-black col-12 col-sm-6 col-md-6" onChange={(e) => handleDataForm(e)} />
                    <strong className="text-black col-12 col-sm-6 col-md-6">Peso:</strong>
                    <input name="weight" value={form.weight || ""} className="text-black col-12 col-sm-6 col-md-6" onChange={(e) => handleDataForm(e)} />
                </div>
            </div>


            {/*Medicamentos y administracion*/}
            <h4 className="mt-5 mx-auto text-black">Receta medicas:</h4>
            {
                medi.map((med,i) =>{
                    return(
                        <div className="mt-1 mb-3 row w-100 mx-auto" key={i}>
                            <textarea rows="1" className="text-black col-3 mx-auto" defaultValue={med.name} disabled></textarea>
                            <textarea rows="1" className="text-black col-3 mx-auto" defaultValue={med.descr} disabled></textarea>
                            <button className="btn btn-danger btn-sm col-2 ml-3 mx-auto" name={med.name} onClick={deleteMed}>Delete</button>
                        </div>
                    )
                })
            }
            <Medicamento handleDataMedi = {handleDataMedi} cont = {cont}/>
            
            {/*Observaciones*/}
            <h4 className="text-black mt-5">Observaciones:</h4>
            <div className="form-group">
                <textarea name="obs" value={form.obs || ""} className="form-control" rows="3" onChange={e=>handleDataForm(e)}></textarea>
            </div>
            <div className="row w-100">
                <button type="submit" className="m-3 mx-auto btn btn-sm btn-success col-12 col-sm-4 col-xs-4 col-md-4" onClick={(e) => checkData(e)} data-toggle="modal" data-target="#exampleModal">Guardar</button>
                <button type="button" className="m-3 mx-auto btn btn-sm btn-success col-12 col-sm-4 col-xs-4 col-md-4" onClick={(e) => setGenerate(true)} >Generar PDF</button>
            </div>
            <PdfManager form = {form} medi={medi} show = {generate}/>
            <Modal title = "Formula medica" msg={msg}/>
        </div>
    )
}

function PdfManager(props){
    const form = props.form;
    const medi = props.medi;
    if(props.show){
        return(
            <div>
                <PDFViewer width="90%" height="842pt">
                    <MyDocument form={form} medi={medi}/>
                </PDFViewer>
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