import React from "react";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import Separator from "../Components/Separator"
import "../Styles/Home.css";

export default class Home extends React.Component{
    render(){
        return(
            <div className="fluid-container">
                <Banner/>
                <Separator name = {"Servicios"}/>
                <Services/>
                <Separator name = {"Consultas"}/>
            </div>
        )
    }
}