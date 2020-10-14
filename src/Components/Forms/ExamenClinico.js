import React from "react"
import "../../App.css"

export default function ExamenClinico(){
    return(
        <form className="fluid-container p-3 mx-auto border-black form-horizontal">
            {/*DATOS DEL USUARIO*/}
            <h2 className="mt-5 text-black text-center">Examen Clinico</h2>
            {/*Variables fisiologicas*/}
            <div className="mx-auto">
                <h4 className="text-black mt-5 mb-5">Variables fisiologicas</h4>
                <div className="row w-100 mx-auto col-12">
                    {/*mucosas*/}
                    <div className="row col-6 mx-auto">
                        <div className="form-group row w-100 mx-auto">
                            <strong className="text-black col-md-6">Mucosas:</strong>
                            <input className="form-control col-md-6" placeholder="mucosas"/>
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

                    <div className="row mx-auto col-6">
                        {/*Linfonodos*/}
                        <div className="form-group row w-100 mx-auto">
                            <strong className="text-black col-md-6">Linfonodos:</strong>
                            <input className="form-control col-md-6" placeholder="Linfonodos"/>
                            <label className="text-black col-md-6">Pulso:</label>
                            <input className="form-control col-md-6" placeholder="Pulso" id="pulso"/>
                            <label className="text-black col-md-6">CC:</label>
                            <input className="form-control col-md-6" placeholder="CC" id="cc"/>
                        </div>
                    </div>
                    <label className="mt-5 text-black col-md-6">Temperamento:</label>
                    <input className=" mt-5 form-control col-md-6" placeholder="docil"/>
                </div>
            </div>

            {/*Examen por sistemas*/}
            <div className="mt-5 mx-auto">
                <h4 className="text-black mb-5">Examen por sistemas</h4>
                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5">Ojos:</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status" id="in1"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7  mx-right" placeholder="Hallazgos anormales" id="in2"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5 ">Oidos:</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status" id="in1"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Hallazgos anormales" id="in2"/>
                </div> 

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Respiratorio</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status" id="in1"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Nariz:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Nariz" id="in2"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Patron Respiratorio:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Patron Respiratorio" id="in3"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Campo Pulmonar:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Campo Pulmonar" id="in4"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Signos:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Signos" id="in5"/>
                </div> 

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Digestivo</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Cavidad oral:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Nariz"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Apetito:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Patron Respiratorio"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Consumo de agua:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Campo Pulmonar"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Defecacion:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Defecacion"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Signos:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Signos"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Tegumentario</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Glandulas mamarias:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Glandulas mamarias"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Hallazgos anormales"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Ectoparasitos:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Extoparasitos"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Prurito:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Prurito"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Cardiovascular</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Muscoloesqueletico</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Claudicacion:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Claudicacion"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Masa muscular:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Masa muscular"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Nervioso</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Nivel de consciencia:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Nivel de consciencia"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Actitud y postura:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Actitud y postura"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Marcha:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Marcha"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Acomodacion propioceptiva:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Acomodacion"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Dolor:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Dolor"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Tono muscular:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Tono muscular"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Urinario</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Miccion:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Claudicacion"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Hallazgos anormales"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Reproductivo</strong>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="status"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Vulva/Pene:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Vulva/pene"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Escroto y testiculos:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Escroto y testiculos"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Ultimo celo:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Ultimo celo"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Montas:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Montas"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Partos y #crias:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Partos y crias"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input className="form-control col-sm-6 col-6 col-md-7 " placeholder="Hallazgos anormales"/>
                </div>
            </div>

            {/* Plan Dx*/}
            <h4 className="text-black mt-5 mb-5">Plan DX</h4>
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-xs-6">
                    <div className="form-check d-flex flex-column">
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Cuadro Hematico</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Quimica sanguinea</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Coprologico</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Corproscopico</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Parcial de orina</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Radiografia</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Ecografia</label>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-xs-6">
                    <div className="form-check d-flex flex-column">
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Citologia</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Raspado de piel</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Biopsia</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Serologia</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>PCR</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Perfil de tiroideo</label>
                        <label className="form-check-label text-black"><input type="checkbox" className="form-check-input"/>Test de supresion con dexametasona</label>
                    </div>
                </div>

                <div className="form-check mx-auto">
                    <label className="form-check-label text-black col-12"><input type="checkbox" className="form-check-input"/>Otros</label>
                    <textarea className="mx-auto" placeholder="Otros"/>
                </div>
                <div className="mx-auto">
                    <h6 className="text-black">Comentarios</h6>
                    <textarea className="mx-auto" placeholder="Comentarios..."/>
                </div>
            </div>

            {/*Lista problemas*/}
            <div className="table-responsive">
                <div className="mx-auto row w-100 mt-5">
                    <div className="col-12 col-sm-4 col-md-4">
                        <strong className="form-check-label text-black col-12">Lista problemas</strong>
                        <textarea placeholder="Type something..."></textarea>
                    </div> 
                    <div className="col-12 col-sm-4 col-md-4">
                        <strong className="form-check-label text-black col-12">Lista Diferenciales</strong>
                        <textarea placeholder="Type something..."></textarea>
                    </div> 
                    <div className="col-12 col-sm-4 col-md-4">
                        <strong className="form-check-label text-black col-12">Lista maestra</strong>
                        <textarea placeholder="Type something..."></textarea>
                    </div> 
                </div>
            </div>

            {/*Tratamiento*/}
            <div className = "mx-auto mt-5">
                <h4 className="text-black">Tratamiento</h4>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Principio Activo</th>
                            <th scope="col">Nombre comercial</th>
                            <th scope="col">Objetivo terapeutico</th>
                            <th scope="col">DB</th>
                            <th scope="col">DA</th>
                            <th scope="col">Frecuencia</th>
                            <th scope="col">Duracion</th>
                            <th scope="col">Via</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                        </tr>
                        <tr>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                        </tr>
                        <tr>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                        </tr>
                        <tr>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                            <td><input className="mx-auto" placeholder=""/></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>

            {/*Recomendaciones*/}
            <div className="mt-5 mx-auto row w-100">
                <strong className="text-black col-12 col-sm-6 col-md-3">Recomendaciones:</strong>
                <input className="mx-auto col-12 col-sm-6 col-md-9" placeholder="Recomendaciones"/>
            </div>

            {/*Pendientes*/}
            <div className="mt-5 mx-auto row w-100">
                <strong className="text-black col-12 col-sm-6 col-md-3">Pendientes:</strong>
                <input className="mx-auto col-12 col-sm-6 col-md-9" placeholder="Pendientes"/>
            </div>

            {/*Fecha de control*/}
            <div className="mt-5 mx-auto row w-100 mb-5">
                <strong className="text-black col-12 col-sm-6 col-md-3">Fecha control</strong>
                <input type="date" className="form-control mx-auto col-12 col-sm-6 col-md-9" placeholder="Fecha control" required/>
            </div>

        </form>
    )
}