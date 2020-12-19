import React, { useEffect, useState } from "react";
import findUser from "../../Server/Firebase"
import firebase from "firebase"
import Separator from "../Containers/Separator"

export default function UserProfile(props) {
    const initialStateUser = { name: "", idCard: "", email: "", tel: "", adress: "", job: "", pets: [] };
    const userDataLog = firebase.auth().currentUser;
    const [user, setUser] = useState(props.user);

    return (
        <div className="mt-5 container">
            <img src={userDataLog.photoURL} className="profile-img"></img>
            <h1 className="d-4 text-black">{userDataLog.displayName}</h1>
            <span className="text-black">{userDataLog.email}</span>

            <section className="mt-5">
                <div className="row w-100 mx-auto">
                    <button className="btn btn-primary mx-auto">Resumen</button>
                    <button className="btn btn-primary mx-auto">Consultas</button>
                    <button className="btn btn-primary mx-auto">Fórmulas médicas</button>
                    <button className="btn btn-primary mx-auto">Historial</button>
                </div>
            </section>
            <Separator />
            <div className="row w-100 mx-auto">
                <div className="mx-auto container m-3 card-shadow col-12">
                    <h2 className="text-black mt-3 mb-3"><strong>Informacion personal</strong></h2>
                    <p className="text-black"><strong>Identificación: </strong>{user.idCard}</p>
                    <p className="text-black"><strong>Telefono: </strong>{user.tel}</p>
                    <p className="text-black"><strong>Dirección: </strong>{user.adress}</p>
                    <p className="text-black"><strong>Ocupación: </strong>{user.job}</p>
                </div>
                <div className="row mx-auto container m-3 card-shadow col-12 col-sm-5 col-xs-5 col-md-5">

                    <h2 className="mx-auto text-black mt-3 mb-3"><strong>Mascotas Registradas</strong></h2>
                    {
                        user.pets && user.pets.map((item, i) => {
                            return (
                                <div className="col-6" key={i}>
                                    <p className="text-black"><strong>Nombre: </strong>{item.name}</p>
                                    <p className="text-black"><strong>Especie: </strong>{item.kind}</p>
                                    <p className="text-black"><strong>Raza: </strong>{item.breed}</p>
                                    <p className="text-black"><strong>Color: </strong>{item.color}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Separator />
        </div>
    )
}