import React from "react"
import ProfilePictureDefault from "../../Assets/Icons/profile.png"
import "../../App.css"

export default function ReviewPet(props){
    const pet = props.pet;
    const handleClick = props.handleClick;
    const fileHidenInput = props.fileHidenInput;
    const handleImg = props.handleImg;
    return(
        <div className="p-3 m-3 card-shadow">
            {pet && pet.picture ? (
                <div>
                    <div className="container col-12 mx-auto">
                        <img src={pet.picture} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                    </div>
                    <div className="container col-12 mx-auto">
                        <button className="m-1 btn rounded-pill btn-success btn-sm mx-auto" onClick={handleClick}>cambiar foto</button>
                        <input type="file" className="d-none" onChange={handleImg} ref={fileHidenInput}/>
                    </div>
                </div>

                ) : (
                
                    <div>
                        <div className="container col-12 mx-auto">
                            <img src={ProfilePictureDefault} className="mx-auto profile-img" alt="dummy" width="100" height="100" />
                        </div>
                        <div className="container col-12 mx-auto">
                            <button className="m-1 rounded-pill btn btn-primary btn-sm mx-auto" onClick={handleClick}>Elegir foto</button>
                            <input type="file" className="mx-auto center btn btn-primay d-none" onChange={handleImg} ref={fileHidenInput}/>
                        </div>
                    </div>
            )}

            <h4 className="mb-5 mt-3 text-black">Mascota</h4>
            <div className="form-group row ww-100 mx-auto">
                <label className= "text-black col-sm-6 col-6 col-md-5">Nombre</label>
                <input name="name" value={props.pet.name} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " required/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Especie</label>
                <input name="kind" value={props.pet.kind} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Raza</label>
                <input name="breed" value={props.pet.breed} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Color</label>
                <input name="color" value={props.pet.color} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                <label className= "text-black col-sm-6 col-6 col-md-5">Tamaño</label>
                <input name="size" value={props.pet.size} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "  />
                <label className= "text-black col-sm-6 col-6 col-md-5">Edad</label>
                <input name="age" value={props.pet.age} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "  />
                <label className= "text-black col-sm-6 col-6 col-md-5">Fecha de cumpleaños</label>
                <input type="date" name="birthday" value={props.pet.birthday} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                <label className= "text-black col-sm-6 col-6 col-md-5">Sexo</label>
                <input name="gender" value={props.pet.gender} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 "/>
                <label className= "text-black col-sm-6 col-6 col-md-5">Estado Reproductivo</label>
                <input name="reproductiveStatus" value={props.pet.reproductiveStatus} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
                <label className= "text-black col-sm-6 col-6 col-md-5">Peso</label>
                <input name="weigth" value={props.pet.weigth} onChange={e => props.handleDataPet(e)} className="form-control col-sm-6 col-6 col-md-7 " />
            </div>
        </div>
    )
}