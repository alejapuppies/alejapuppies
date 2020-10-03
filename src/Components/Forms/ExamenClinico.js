import React from "react"
import "../../App.css"

export default function ExamenClinico(){
    return(
        <form className="container mt-5 mx-auto border-black form-horizontal">
            {/*DATOS DEL USUARIO*/}
            <h2 className="mt-5 text-black text-center">Examen Clinico</h2>
            {/*Variables fisiologicas*/}
            <div className="mx-auto">
                <h4 className="text-black mt-5 mb-5">Variables fisiologicas</h4>
                <div className="row w-100 mx-auto">
                    {/*mucosas*/}
                    <div className="row w-50 mx-auto">
                        <h6 className="text-black mx-auto text-center mb-3">Mucosas</h6>
                        <div className="form-group row w-100 mx-auto">
                            <label className="text-black col-md-6">TLLC:</label>
                            <input className="form-control col-md-6" placeholder="TLLC" id="tllc"/>
                            <label className="text-black col-md-6">FC:</label>
                            <input className="form-control col-md-6" placeholder="FC" id="fc"/>
                            <label className="text-black col-md-6">FR:</label>
                            <input className="form-control col-md-6" placeholder="FR" id="fr"/>
                            <label className="text-black col-md-6">T°:</label>
                            <input className="form-control col-md-6" placeholder="T°" id="t"/>
                        </div>
                    </div>

                    <div className="row mx-auto w-50">
                        {/*Linfonodos*/}
                        <h6 className="text-black text-center mx-auto mb-3">Linfonodos</h6>
                        <div className="form-group row w-100 mx-auto">
                            <label className="text-black col-md-6">Pulso:</label>
                            <input className="form-control col-md-6" placeholder="Pulso" id="pulso"/>
                            <label className="text-black col-md-6">CC:</label>
                            <input className="form-control col-md-6" placeholder="CC" id="cc"/>
                        </div>
                    </div>
                </div>
            </div>

            {/*Examen por sistemas*/}
            <div className="mt-5 mx-auto">
                <h4 className="text-black mb-5">Examen por sistemas</h4>
                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6">Ojos:</strong>
                    <input className="form-control col-sm-6 " placeholder="status" id="in1"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6  mx-right" placeholder="Hallazgos anormales" id="in2"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 ">Oidos:</strong>
                    <input className="form-control col-sm-6 " placeholder="status" id="in1"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 " placeholder="Hallazgos anormales" id="in2"/>
                </div> 

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Respiratorio</strong>
                    <input className="form-control col-sm-6 " placeholder="status" id="in1"/>
                    <label className="text-black col-sm-6 ">Nariz:</label>
                    <input className="form-control col-sm-6 " placeholder="Nariz" id="in2"/>
                    <label className="text-black col-sm-6 ">Patron Respiratorio:</label>
                    <input className="form-control col-sm-6 " placeholder="Patron Respiratorio" id="in3"/>
                    <label className="text-black col-sm-6 ">Campo Pulmonar:</label>
                    <input className="form-control col-sm-6 " placeholder="Campo Pulmonar" id="in4"/>
                    <label className="text-black col-sm-6 ">Signos:</label>
                    <input className="form-control col-sm-6 " placeholder="Signos" id="in5"/>
                </div> 

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Digestivo</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Cavidad oral:</label>
                    <input className="form-control col-sm-6 " placeholder="Nariz"/>
                    <label className="text-black col-sm-6 ">Apetito:</label>
                    <input className="form-control col-sm-6 " placeholder="Patron Respiratorio"/>
                    <label className="text-black col-sm-6 ">Consumo de agua:</label>
                    <input className="form-control col-sm-6 " placeholder="Campo Pulmonar"/>
                    <label className="text-black col-sm-6 ">Defecacion:</label>
                    <input className="form-control col-sm-6 " placeholder="Defecacion"/>
                    <label className="text-black col-sm-6 ">Signos:</label>
                    <input className="form-control col-sm-6 " placeholder="Signos"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Tegumentario</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Glandulas mamarias:</label>
                    <input className="form-control col-sm-6 " placeholder="Glandulas mamarias"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 " placeholder="Hallazgos anormales"/>
                    <label className="text-black col-sm-6 ">Ectoparasitos:</label>
                    <input className="form-control col-sm-6 " placeholder="Extoparasitos"/>
                    <label className="text-black col-sm-6 ">Prurito:</label>
                    <input className="form-control col-sm-6 " placeholder="Prurito"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Cardiovascular</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 " placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Muscoloesqueletico</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Claudicacion:</label>
                    <input className="form-control col-sm-6 " placeholder="Claudicacion"/>
                    <label className="text-black col-sm-6 ">Masa muscular:</label>
                    <input className="form-control col-sm-6 " placeholder="Masa muscular"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 " placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Nervioso</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Nivel de consciencia:</label>
                    <input className="form-control col-sm-6 " placeholder="Nivel de consciencia"/>
                    <label className="text-black col-sm-6 ">Actitud y postura:</label>
                    <input className="form-control col-sm-6 " placeholder="Actitud y postura"/>
                    <label className="text-black col-sm-6 ">Marcha:</label>
                    <input className="form-control col-sm-6 " placeholder="Marcha"/>
                    <label className="text-black col-sm-6 ">Acomodacion propioceptiva:</label>
                    <input className="form-control col-sm-6 " placeholder="Acomodacion"/>
                    <label className="text-black col-sm-6 ">Dolor:</label>
                    <input className="form-control col-sm-6 " placeholder="Dolor"/>
                    <label className="text-black col-sm-6 ">Tono muscular:</label>
                    <input className="form-control col-sm-6 " placeholder="Tono muscular"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Urinario</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Miccion:</label>
                    <input className="form-control col-sm-6 " placeholder="Claudicacion"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 " placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6  strong">Sistema Reproductivo</strong>
                    <input className="form-control col-sm-6 " placeholder="status"/>
                    <label className="text-black col-sm-6 ">Vulva/Pene:</label>
                    <input className="form-control col-sm-6 " placeholder="Vulva/pene"/>
                    <label className="text-black col-sm-6 ">Escroto y testiculos:</label>
                    <input className="form-control col-sm-6 " placeholder="Escroto y testiculos"/>
                    <label className="text-black col-sm-6 ">Ultimo celo:</label>
                    <input className="form-control col-sm-6 " placeholder="Ultimo celo"/>
                    <label className="text-black col-sm-6 ">Montas:</label>
                    <input className="form-control col-sm-6 " placeholder="Montas"/>
                    <label className="text-black col-sm-6 ">Partos y #crias:</label>
                    <input className="form-control col-sm-6 " placeholder="Partos y crias"/>
                    <label className="text-black col-sm-6 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 " placeholder="Hallazgos anormales"/>
                </div>

            </div>

            <h4 className="mt-5 text-black">Fecha control</h4>
            <input type="date" className="form-control w-50 mx-auto" placeholder="Fecha control" required/>
        </form>
    )
}