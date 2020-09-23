import React from "react";
import BannerImg from "../Assets/banner.jpg"
import BannerImg2 from "../Assets/banner2.jpg"
import BannerImg3 from "../Assets/banner3.jpg"

export default function Banner(){
    return(
        <div className="fluid-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="img-fluid" src={BannerImg} alt="First slide" style={{height:"500px"}}/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src={BannerImg2} alt="Second slide" style={{height:"500px"}}/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src={BannerImg3} alt="Third slide" style={{height:"500px"}}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <h3 className="slogan text-black font-weight-bold p-3 mb-0">Un poco de amor para tu mascota</h3>
        </div>
    )
}