import React from "react"

export default function(){
    return(
        <div className="mt-5 bg-black mx-auto pt-3">
                <footer className="footer">
                    <div className="row w-100 mx-auto">
                        <div className="col-sm-4 col-custom">
                            <h4 className="text-title">Sobre Aleja Puppies</h4>
                            <ul className="list-group list-group-flush list">
                                <li className="list-item"><a className="text-muted" href="#">Nosotros</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Experiencia</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Veterinaria</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Eventos</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Trabaja con nosotros</a></li>
                            </ul>

                        </div>

                        <div className="col-sm-4 col-custom mx-auto">
                            <h4 className="text-title">Politicas</h4>
                            <ul className="list-group list-group-flush list">
                                <li className="list-item"><a className="text-muted" href="#">Privacidad</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Legal</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Terminos y condiciones</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Devoluciones</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Promociones</a></li>
                            </ul>
                        </div>

                        <div className="col-sm-4 col-custom mx-auto">
                            <h4 className="text-title">Redes Sociales</h4>
                            <ul className="list-group list-group-flush list">
                                <li className="list-item"><a className="text-muted" href="#">Instagram</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Facebook</a></li>
                                <li className="list-item"><a className="text-muted" href="#">Whatsapp</a></li>
                            </ul>
                            <div className="row d-block w-100 mx-auto mt-auto">
                                
                            </div>
                        </div>

                    </div>
                    <div className="copyright mt-3">
                        <p className="text-light text-center mb-0">&copy; 2020 Aleja Puppies </p>
                        <p className="text-muted text-center mt-0">Esta prohibida la distribucion del contenido de esta pagina para fines maliciosos</p>
                    </div>
                </footer>
            </div>
    )
}