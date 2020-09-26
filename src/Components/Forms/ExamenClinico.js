import React from "react"

export default function ExamenClinico(){
    return(
        <form className="fluid-container mx-auto">
            {/*DATOS DEL USUARIO*/}
            <div>
                <h2 className="mt-5 text-black">Examen Clinico</h2>
                {/*Variables fisiologicas*/}
                <h4 className="text-black mt-5 text-center">Variables fisiologicas</h4>
                <div className="row w-100">
                    <h6 className="col-sm-6 mt-3 text-black">Mucosas</h6>
                    <h6 className="col-sm-6 mt-3 text-black">Linfonodos</h6>
                    <div className="w-100 row mx-auto">
                        {/*Mucosas*/}
                        <div className="form-group w-50">
                            <input type="text" className="form-control" placeholder="TLLC"/>
                            <input type="text" className="form-control" placeholder="FC"/>
                            <input type="text" className="form-control" placeholder="FR"/>
                            <input type="text" className="form-control" placeholder="T°"/>
                        </div>
                        {/*Linfonodos*/}
                        <div className="form-group w-50">
                            <input type="text" className="form-control" placeholder="Pulso"/>
                            <input type="text" className="form-control" placeholder="CC"/>
                        </div>
                    </div>
                    <h6 className="text-black">Temperamento: <input type="text" placeholder="docil"/></h6>
                </div>
            </div>

            {/*Examen por sistemas*/}
            <div>
                {/*Ojos*/}
                <h4 className="text-black mt-5">Examen por sistemas</h4>
                <h6 className="text-black text-center">Ojos</h6>
                <div className="clearfix mt-3 row w-100 mx-auto">
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="status"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                    </div>
                </div>

                {/*Oidos*/}
                <h6 className="text-black text-center">Oidos</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="status"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                    </div>
                </div>

                {/*Sistema Respiratorio*/}
                <h6 className="text-black text-center">Sistema Respiratorio</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Nariz"/>
                        <input type="text" className="form-control" placeholder="Patron Respiratorio"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Campo pulmonar"/>
                        <input type="text" className="form-control" placeholder="Signos"/>
                    </div>
                </div>

                {/*Sistema Digestivo*/}
                <h6 className="text-black text-center">Sistema Digestivo</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Cavidad oral"/>
                        <input type="text" className="form-control" placeholder="Apetito"/>
                        <input type="text" className="form-control" placeholder="Consumo de agua"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Defecacion"/>
                        <input type="text" className="form-control" placeholder="Signos"/>
                    </div>
                </div>

                {/*Sistema Tegumentario*/}
                <h6 className="text-black text-center">Sistema Tegumentario</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Glandulas mamarias"/>
                        <input type="text" className="form-control" placeholder="Ectoparasitos"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                        <input type="text" className="form-control" placeholder="Prurito"/>
                    </div>
                </div>

                {/*Sistema cardiovascular*/}
                <h6 className="text-black text-center">Sistema cardiovascular</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="status"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                    </div>
                </div>

                {/*Sistema Musculoesqueletico*/}
                <h6 className="text-black text-center">Sistema Musculoesqueletico</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Claudicacion"/>
                        <input type="text" className="form-control" placeholder="Masa Muscular"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                    </div>
                </div>

                {/*Sistema Nervioso*/}
                <h6 className="text-black text-center">Sistema Nervioso</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Nivel de consciencia"/>
                        <input type="text" className="form-control" placeholder="Actitud y postura"/>
                        <input type="text" className="form-control" placeholder="Marcha"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Acomodacion propioceptiva"/>
                        <input type="text" className="form-control" placeholder="Dolor"/>
                        <input type="text" className="form-control" placeholder="Tono muscular"/>
                    </div>
                </div>

                {/*Sistema urinario*/}
                <h6 className="text-black text-center">Sistema urinario</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Miccion"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                    </div>
                </div>

                {/*Sistema reproductivo*/}
                <h6 className="text-black text-center">Sistema reproductivo</h6>
                <div className="mt-3 row w-100 mx-auto">
                    <div className="from-group w-100 mb-3">
                        <input type="text" className="form-control text-center" placeholder="status"/>                        
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Vulva/pene"/>
                        <input type="text" className="form-control" placeholder="Escroto y testiculos"/>
                        <input type="text" className="form-control" placeholder="Ultimo celo"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Montas"/>
                        <input type="text" className="form-control" placeholder="Partos y # de crias"/>
                        <input type="text" className="form-control" placeholder="Hallazgos anormales"/>
                    </div>
                </div>
            </div>

            <h4 className="mt-5 text-black">Fecha control</h4>
            <input type="date" className="form-control" placeholder="Fecha control" required/>
        </form>
    )
}