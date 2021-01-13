import React, { useEffect, useState } from "react"
import UserService from "../../Services/UserService";

export default function ViewUsers(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        retrieveUsers();
    },[]);

    const retrieveUsers = () =>{
        const retrievedData = [];
        UserService.getAllUsers()
        .on("value", function(res){
            res.forEach(function(child){
                if(!retrievedData.includes(child.val()))
                    retrievedData.push(child.val());
            })
            setUsers(retrievedData);
        })
    }

    return(
        <div className="fluid-container">
            <table className="table table-striped table-responsive" style={{width:"90%", margin:"auto"}}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Ocupación</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Mascotas</th>
                    </tr>
                </thead>
                {
                    users && users.map((user,i) => {
                        return(
                            <tbody key={i}> 
                                <tr>
                                <th scope="row">{user.idCard}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.adress}</td>
                                    <td>{user.job}</td>
                                    <td>{user.tel}</td>
                                    <td>
                                        {
                                            user.pets && user.pets.map((pet,j) =>{
                                                return(
                                                    <div key={j}>
                                                        <h6 className="text-black">{pet.name}</h6>
                                                    </div>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}