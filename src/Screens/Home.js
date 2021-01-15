import React from "react";
import Banner from "../Components/Containers/Banner";
import Services from "../Components/Containers/Services";
import Separator from "../Components/Containers/Separator"
import "../Styles/Home.css";

export default class Home extends React.Component{
    render(){
        return(
            <div className="fluid-container">
                <Banner/>
            </div>
        )
    }
}