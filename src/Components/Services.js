import React from "react"
import ServicesList from "../Components/ServicesList"
import doggy1 from "../Assets/doggy1.jpg"
import doggy2 from "../Assets/doggy2.jpg"
import doggy3 from "../Assets/doggy3.jpg"

export default class Services extends React.Component{

    state = {
        dataServices:[
            {
                "id":1,
                "title":"Peluqueria",
                "description":"El mejor estilo para tu canino despues de su baño",
                "img": doggy2
            },
            {
                "id":2,
                "title":"Servicio Medico",
                "description":"Mantenlo protegido de todos los peligros posibles",
                "img": doggy3
            },
            {
                "id":3,
                "title":"Guarderia",
                "description":"Te cuidamos tu mascota mientras trabajas",
                "img": doggy1
            }
        ]
    }

    render(){
        return(
            <div className="fluid-container">
                <div className="mx-auto pt-5 mt-0">
                    <ServicesList 
                        services = {this.state.dataServices} 
                    />
                </div>
            </div>
        )
    }
}