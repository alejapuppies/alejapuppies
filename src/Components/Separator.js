import React from "react"

function Separate({name}){
    return(
        <h2 className="text-white mt-5 mb-0 background-primary">
            <hr className="styleHR"/>
            {name}
            <hr className="styleHR"/>
        </h2>
    )
}

export default Separate;