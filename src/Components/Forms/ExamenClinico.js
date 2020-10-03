import React from "react"
import "../../App.css"

export default function ExamenClinico(){
    return(
        <form className="container mt-5 mx-auto border-black form-horizontal">
            {/*DATOS DEL USUARIO*/}
            <h2 className="mt-5 text-black text-center">Examen Clinico</h2>
            {/*Variables fisiologicas*/}
            <div className="">
                <h4 className="text-black mt-5 mb-5">Variables fisiologicas</h4>
                <div className="row w-100 mx-auto">
                    {/*mucosas*/}
                    <div className="row w-50 mx-auto">
                        <h6 className="text-black mx-auto text-center mb-3">Mucosas</h6>
                        <div className="form-group row w-100">
                            <label for="tllc" className="text-black col-6">TLLC:</label>
                            <input className="form-control col-6" placeholder="TLLC" id="tllc"/>
                            <label for="fc" className="text-black col-6">FC:</label>
                            <input className="form-control col-6" placeholder="FC" id="fc"/>
                            <label for="fr"className="text-black col-6">FR:</label>
                            <input className="form-control col-6" placeholder="FR" id="fr"/>
                            <label for="t"className="text-black col-6">T°:</label>
                            <input className="form-control col-6" placeholder="T°" id="t"/>
                        </div>
                    </div>

                    <div className="row mx-auto w-50">
                        {/*Linfonodos*/}
                        <h6 className="text-black text-center mx-auto mb-3">Linfonodos</h6>
                        <div className="form-group row w-100 mx-auto">
                            <label for="pulso" className="text-black col-6">Pulso:</label>
                            <input className="form-control col-6" placeholder="Pulso" id="pulso"/>
                            <label for="cc" className="text-black col-6">CC:</label>
                            <input className="form-control col-6" placeholder="CC" id="cc"/>
                        </div>
                    </div>
                </div>
            </div>

            {/*Examen por sistemas*/}
            <div className="mt-5">
                <h4 className="text-black mb-5">Examen por sistemas</h4>
                <div className="form-group row w-100">
                    <strong for="in1" className="text-black col-5">Ojos:</strong>
                    <input className="form-control col-7" placeholder="status" id="in1"/>
                    <label for="in2" className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7 mx-right" placeholder="Hallazgos anormales" id="in2"/>
                </div>

                <div className="form-group row w-100">
                    <strong for="in1" className="text-black col-5">Oidos:</strong>
                    <input className="form-control col-7" placeholder="status" id="in1"/>
                    <label for="in2" className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7" placeholder="Hallazgos anormales" id="in2"/>
                </div> 

                <div className="form-group row w-100">
                    <strong for="in1" className="text-black col-5 strong">Sistema Respiratorio:</strong>
                    <input className="form-control col-7" placeholder="status" id="in1"/>
                    <label for="in2" className="text-black col-5">Nariz:</label>
                    <input className="form-control col-7" placeholder="Nariz" id="in2"/>
                    <label for="in3" className="text-black col-5">Patron Respiratorio:</label>
                    <input className="form-control col-7" placeholder="Patron Respiratorio" id="in3"/>
                    <label for="in4" className="text-black col-5">Campo Pulmonar:</label>
                    <input className="form-control col-7" placeholder="Campo Pulmonar" id="in4"/>
                    <label for="in5" className="text-black col-5">Signos:</label>
                    <input className="form-control col-7" placeholder="Signos" id="in5"/>
                </div> 

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Digestivo:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Cavidad oral:</label>
                    <input className="form-control col-7" placeholder="Nariz"/>
                    <label className="text-black col-5">Apetito:</label>
                    <input className="form-control col-7" placeholder="Patron Respiratorio"/>
                    <label className="text-black col-5">Consumo de agua:</label>
                    <input className="form-control col-7" placeholder="Campo Pulmonar"/>
                    <label className="text-black col-5">Defecacion:</label>
                    <input className="form-control col-7" placeholder="Defecacion"/>
                    <label className="text-black col-5">Signos:</label>
                    <input className="form-control col-7" placeholder="Signos"/>
                </div>

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Tegumentario:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Glandulas mamarias:</label>
                    <input className="form-control col-7" placeholder="Glandulas mamarias"/>
                    <label className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7" placeholder="Hallazgos anormales"/>
                    <label className="text-black col-5">Ectoparasitos:</label>
                    <input className="form-control col-7" placeholder="Extoparasitos"/>
                    <label className="text-black col-5">Prurito:</label>
                    <input className="form-control col-7" placeholder="Prurito"/>
                </div>

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Cardiovascular:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7" placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Muscoloesqueletico:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Claudicacion:</label>
                    <input className="form-control col-7" placeholder="Claudicacion"/>
                    <label className="text-black col-5">Masa muscular:</label>
                    <input className="form-control col-7" placeholder="Masa muscular"/>
                    <label className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7" placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Nervioso:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Nivel de consciencia:</label>
                    <input className="form-control col-7" placeholder="Nivel de consciencia"/>
                    <label className="text-black col-5">Actitud y postura:</label>
                    <input className="form-control col-7" placeholder="Actitud y postura"/>
                    <label className="text-black col-5">Marcha:</label>
                    <input className="form-control col-7" placeholder="Marcha"/>
                    <label className="text-black col-5">Acomodacion propioceptiva:</label>
                    <input className="form-control col-7" placeholder="Acomodacion"/>
                    <label className="text-black col-5">Dolor:</label>
                    <input className="form-control col-7" placeholder="Dolor"/>
                    <label className="text-black col-5">Tono muscular:</label>
                    <input className="form-control col-7" placeholder="Tono muscular"/>
                </div>

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Urinario:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Miccion:</label>
                    <input className="form-control col-7" placeholder="Claudicacion"/>
                    <label className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7" placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100">
                    <strong className="text-black col-5 strong">Sistema Reproductivo:</strong>
                    <input className="form-control col-7" placeholder="status"/>
                    <label className="text-black col-5">Vulva/Pene:</label>
                    <input className="form-control col-7" placeholder="Vulva/pene"/>
                    <label className="text-black col-5">Escroto y testiculos:</label>
                    <input className="form-control col-7" placeholder="Escroto y testiculos"/>
                    <label className="text-black col-5">Ultimo celo:</label>
                    <input className="form-control col-7" placeholder="Ultimo celo"/>
                    <label className="text-black col-5">Montas:</label>
                    <input className="form-control col-7" placeholder="Montas"/>
                    <label className="text-black col-5">Partos y #crias:</label>
                    <input className="form-control col-7" placeholder="Partos y crias"/>
                    <label className="text-black col-5">Hallazgos anormales:</label>
                    <input className="form-control col-7" placeholder="Hallazgos anormales"/>
                </div>

            </div>

            <h4 className="mt-5 text-black">Fecha control</h4>
            <input type="date" className="form-control w-50 mx-auto" placeholder="Fecha control" required/>
        </form>
    )
}