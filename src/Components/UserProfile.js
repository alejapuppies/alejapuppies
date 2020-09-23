import React from "react"

export default function UserProfile(props){
    const {user} = props;
    return(
        <div className="mt-5 container">
            <img src={user.photoURL} className = "profile-img"></img>
            <h1 className = "d-4 text-black">{user.displayName}</h1>
            <span className="text-black">{user.email}</span>

            <section className="mt-5">
                <div className="row w-100 mx-auto">
                    <button className="mx-auto">Historial</button>
                    <button className="mx-auto">Historial</button>
                    <button className="mx-auto">Historial</button>
                    <button className="mx-auto">Historial</button>
                </div>
            </section>
        </div>
    )
}