import React from "react"

export default function AdminProfile(props){
    const {user} = props;
    return(
        <div className="mt-5 container">
            <img src={user.photoURL} className = "profile-img"></img>
            <h1 className = "d-4 text-black">{user.displayName}</h1>
            <span className="text-black">{user.email}</span>

            <div className="row w-100 mx-auto mt-5">
                <button className="btn btn-largue btn-primary mx-auto m-1">Registrar usuario</button>
                <button className="btn btn-largue btn-primary mx-auto m-1">Buscar usuario</button>
                <button className="btn btn-largue btn-primary mx-auto m-1">Actualizar usuario</button>
                <button className="btn btn-largue btn-primary mx-auto m-1">Eliminar usuario</button>
            </div>

            <form className="fluid-container">
                {/*DATOS DEL USUARIO*/}
                <h4 className="mt-5 text-black">RESEÑA</h4>
                <div className="w-100 row mx-auto">
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Nombre" required/>
                        <input type="text" className="form-control" placeholder="Especie" required/>
                        <input type="text" className="form-control" placeholder="Raza" required/>
                        <input type="text" className="form-control" placeholder="Color" required/>
                        <input type="text" className="form-control" placeholder="Tamaño" required/>
                    </div>
                    <div className="form-group w-50">
                        <input type="number" className="form-control" placeholder="Edad" required/>
                        <input type="text" className="form-control" placeholder="Sexo" required/>
                        <input type="text" className="form-control" placeholder="Estado productivo" required/>
                        <input type="number" className="form-control" placeholder="Peso" required/>
                        <input type="text" className="form-control" placeholder="Comentarios" required/>
                    </div>
                </div>

                {/*DATOS DE LA FAMILIA*/}
                <h4 className="mt-5 text-black">FAMILIA</h4>
                <div className="w-100 row mx-auto">
                    <div className="form-group w-50">
                        <input type="text" className="form-control" placeholder="Tutor 1" required/>
                        <input type="text" className="form-control" placeholder="Tutor 2"/>
                        <input type="text" className="form-control" placeholder="Direccion" required/>
                        <input type="text" className="form-control" placeholder="Ocupacion"/>
                    </div>
                    <div className="form-group w-50">
                        <input type="number" className="form-control" placeholder="Telefono" required/>
                        <input type="number" className="form-control" placeholder="Telefono"/>
                        <input type="email" className="form-control" placeholder="Correo" required/>
                        <input type="text" className="form-control" placeholder="Acudiente"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-large btn-info">Enviar</button>
            </form>


        </div>
    )
}