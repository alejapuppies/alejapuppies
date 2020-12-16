import React from "react"
import Card from "./Card"

const ServicesList = ({services})=>(
    
    <div className="fluid-container row w-100 mx-auto">
        {
            services.map((service, i) =>{
                return(
                    <Card
                        key = {i}
                        title = {service.title}
                        description = {service.description}
                        img = {service.img}
                    />
                )
            })
        }
    </div>
)

export default ServicesList;