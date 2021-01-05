import React from "react"
import "../../App.css"

export default function ExamenClinico(props){

    const handleData = (e) => {
        props.handleExamen(e);
    }

    return(
        <div className="m-3 fluid-container card-shadow p-3 mx-auto form-horizontal">
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
                            <input name = "mucosas" onChange ={(e) => handleData(e)} className="form-control col-md-6"/>
                            <label className="text-black col-md-6">TLLC:</label>
                            <input name = "tllc" onChange ={(e) => handleData(e)} className="form-control col-md-6" id="tllc"/>
                            <label className="text-black col-md-6">FC:</label>
                            <input name = "fc" onChange ={(e) => handleData(e)} className="form-control col-md-6" id="fc"/>
                            <label className="text-black col-md-6">FR:</label>
                            <input name = "fr" onChange ={(e) => handleData(e)} className="form-control col-md-6" id="fr"/>
                            <label className="text-black col-md-6">T°:</label>
                            <input name = "temp" onChange ={(e) => handleData(e)} className="form-control col-md-6" id="t"/>
                        </div>
                    </div>

                    <div className="row mx-auto col-6">
                        {/*Linfonodos*/}
                        <div className="form-group row w-100 mx-auto">
                            <strong className="text-black col-md-6">Linfonodos:</strong>
                            <input name = "linfonodos" onChange ={(e) => handleData(e)} className="form-control col-md-6"/>
                            <label className="text-black col-md-6">Pulso:</label>
                            <input name = "pulso" onChange ={(e) => handleData(e)} className="form-control col-md-6" id="pulso"/>
                            <label className="text-black col-md-6">CC:</label>
                            <input name = "cc" onChange ={(e) => handleData(e)} className="form-control col-md-6" id="cc"/>
                        </div>
                    </div>
                    <label className="mt-5 text-black col-md-6">Temperamento:</label>
                    <input name = "temperamento" onChange ={(e) => handleData(e)} className=" mt-5 form-control col-md-6"/>
                </div>
            </div>

            {/*Examen por sistemas*/}
            <div className="mt-5 mx-auto">
                <h4 className="text-black mb-5">Examen por sistemas</h4>
                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5">Ojos:</strong>
                    <input name = "ojos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " id="in1"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-ojos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7  mx-right" id="in2"/>
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5 ">Oidos:</strong>
                    <input name = "oidos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " id="in1"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-oidos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " id="in2"/>
                </div> 

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Respiratorio</strong>
                    <input name = "sistema-respiratorio" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " id="in1"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Nariz:</label>
                    <input name = "nariz" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "  id="in2"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Patron Respiratorio:</label>
                    <input name = "patron-respiratorio" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "  id="in3"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Campo Pulmonar:</label>
                    <input name = "campo-pulmonar" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " id="in4"/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Signos:</label>
                    <input name = "signos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "  id="in5"/>
                </div> 

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Digestivo</strong>
                    <input name = "sistema-digestivo" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Cavidad oral:</label>
                    <input name = "cavidad-oral" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Apetito:</label>
                    <input name = "apetito" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Consumo de agua:</label>
                    <input name = "consumo-agua" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Defecación:</label>
                    <input name = "defecacion" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Signos:</label>
                    <input name = "signos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Tegumentario</strong>
                    <input name = "sistema-tegumentario" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Glandulas mamarias:</label>
                    <input name = "glandilas-marinas" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-tagumentario" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Ectoparasitos:</label>
                    <input name = "ectoparasitos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Prurito:</label>
                    <input name = "prurito" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Cardiovascular</strong>
                    <input name = "sistema-cardiovascular" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-cardiovascular" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Muscoloesqueletico</strong>
                    <input name = "sistema-muscoesqueletico" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Claudicacion:</label>
                    <input name = "claudicacion" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Masa muscular:</label>
                    <input name = "masa-muscular" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-masa" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Nervioso</strong>
                    <input name = "sistema-nervioso" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Nivel de consciencia:</label>
                    <input name = "nivel-consciencia" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Actitud y postura:</label>
                    <input name = "actitud-postura" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Marcha:</label>
                    <input name = "marcha" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Acomodacion propioceptiva:</label>
                    <input name = "acomodacion-propioceptiva" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Dolor:</label>
                    <input name = "dolor" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Tono muscular:</label>
                    <input name = "tono-muscular" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Urinario</strong>
                    <input name = "sistema-urinario" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Miccion:</label>
                    <input name = "miccion" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-miccion" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>

                <div className="form-group row w-100 mx-auto">
                    <strong className="text-black col-sm-6 col-6 col-md-5  strong">Sistema Reproductivo</strong>
                    <input name = "sistema-reproductivo" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Vulva/Pene:</label>
                    <input name = "vulva-pene" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Escroto y testiculos:</label>
                    <input name = "escroto-testiculos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Ultimo celo:</label>
                    <input name = "ultimo-celo" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Montas:</label>
                    <input name = "montas" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Partos y #crias:</label>
                    <input name = "partos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                    <label className="text-black col-sm-6 col-6 col-md-5 ">Hallazgos anormales:</label>
                    <input name = "hallazgos-partos" onChange ={(e) => handleData(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                </div>
            </div>

            {/* Plan Dx*/}
            <h4 className="text-black mt-5 mb-5">Plan DX</h4>
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-xs-6">
                    <div className="form-check d-flex flex-column">
                        <label className="form-check-label text-black"><input name = "cuadro-hematico" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Cuadro Hemático</label>
                        <label className="form-check-label text-black"><input name = "quimica-sanguinea" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Química sanguínea</label>
                        <label className="form-check-label text-black"><input name = "corprologico" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Coprológico</label>
                        <label className="form-check-label text-black"><input name = "corproscopico" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Corproscópico</label>
                        <label className="form-check-label text-black"><input name = "parcial-orina" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Parcial de orina</label>
                        <label className="form-check-label text-black"><input name = "radiografia" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Radiografía</label>
                        <label className="form-check-label text-black"><input name = "ecografia" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Ecografía</label>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-xs-6">
                    <div className="form-check d-flex flex-column">
                        <label className="form-check-label text-black"><input name = "citologia" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Citología</label>
                        <label className="form-check-label text-black"><input name = "raspado-piel" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Raspado de piel</label>
                        <label className="form-check-label text-black"><input name = "biopsia" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Biopsia</label>
                        <label className="form-check-label text-black"><input name = "serologia" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Serologia</label>
                        <label className="form-check-label text-black"><input name = "pcr" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>PCR</label>
                        <label className="form-check-label text-black"><input name = "perfil-tiroideo" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Perfil de tiroideo</label>
                        <label className="form-check-label text-black"><input name = "test-supresion" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Test de supresion con dexametasona</label>
                    </div>
                </div>

                <div className="form-check mx-auto">
                    <label className="form-check-label text-black col-12"><input name = "otros" onChange ={(e) => handleData(e)} type="checkbox" className="form-check-input"/>Otros</label>
                    <textarea name="otros-text" onChange ={(e) => handleData(e)} className="mx-auto" />
                </div>
                <div className="mx-auto">
                    <h6 className="text-black">Comentarios</h6>
                    <textarea name="comentarios" onChange ={(e) => handleData(e)} className="mx-auto"/>
                </div>
            </div>

            {/*Lista problemas*/}
            <div className="table-responsive">
                <div className="mx-auto row w-100 mt-5">
                    <div className="col-12 col-sm-4 col-md-4">
                        <strong className="form-check-label text-black col-12">Lista problemas</strong>
                        <textarea name="lista-problemas" onChange ={(e) => handleData(e)}></textarea>
                    </div> 
                    <div className="col-12 col-sm-4 col-md-4">
                        <strong className="form-check-label text-black col-12">Lista Diferenciales</strong>
                        <textarea name="lista-diferenciales" onChange ={(e) => handleData(e)}></textarea>
                    </div> 
                    <div className="col-12 col-sm-4 col-md-4">
                        <strong className="form-check-label text-black col-12">Lista maestra</strong>
                        <textarea name="lista-maestra" onChange ={(e) => handleData(e)}></textarea>
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
                            <td><input name = "principio-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "nombre-comercial-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "objetivo-terapeutico-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "db-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "da-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "frecuencia-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "duracion-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "via-1" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                        </tr>
                        <tr>
                            <td><input name = "principio-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "nombre-comercial-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "objetivo-terapeutico-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "db-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "da-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "frecuencia-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "duracion-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "via-2" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                        </tr>
                        <tr>
                            <td><input name = "principio-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "nombre-comercial-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "objetivo-terapeutico-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "db-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "da-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "frecuencia-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "duracion-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "via-3" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                        </tr>
                        <tr>
                            <td><input name = "principio-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "nombre-comercial-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "objetivo-terapeutico-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "db-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "da-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "frecuencia-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "duracion-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                            <td><input name = "via-4" onChange ={(e) => handleData(e)} className="mx-auto" /></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>

            {/*Recomendaciones*/}
            <div className="mt-5 mx-auto row w-100">
                <strong className="text-black col-12 col-sm-6 col-md-3">Recomendaciones:</strong>
                <input name = "recomendaciones" onChange ={(e) => handleData(e)} className="mx-auto col-12 col-sm-6 col-md-9"/>
            </div>

            {/*Pendientes*/}
            <div className="mt-5 mx-auto row w-100">
                <strong className="text-black col-12 col-sm-6 col-md-3">Pendientes:</strong>
                <input name = "pendientes" onChange ={(e) => handleData(e)} className="mx-auto col-12 col-sm-6 col-md-9"/>
            </div>

            {/*Fecha de control*/}
            <div className="mt-5 mx-auto row w-100 mb-5">
                <strong className="text-black col-12 col-sm-6 col-md-3">Fecha control</strong>
                <input name = "fecha-control" onChange ={(e) => handleData(e)} type="date" className="form-control mx-auto col-12 col-sm-6 col-md-9" required/>
            </div>

        </div>
    )
}