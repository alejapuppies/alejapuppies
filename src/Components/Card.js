import React from "react"

export default class Card extends React.Component{
    render(){
        const {title, description, img} = this.props;
        return(
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mx-auto p-1" style={{backgroundColor:"#F0450C"}}>
                <div className="card" style={{backgroundColor:"#fff"}}>
                    <img className="card-img-top" src={img} alt="Card image cap" width="250px" height="250px"/>
                    <div className="card-body">
                    <h5 className="card-title text-black text-center" style={{backgroundColor:"#80FF19"}}>{title}</h5>
                        <hr className="bg-primary"/>
                        <p className="card-text text-black text-center text-justify">{description}</p>
                        <button className="btn btn-primary">Solicitar</button>
                    </div>  
                </div>
            </div>
        )
    }
}
