import React, { useEffect, useState } from "react"
import Modal from "../../Containers/Modal";
import StockService from "../../Services/StockService";

export default function Stock(){
    
    const initialStateStock = {name:"", units: 0, price: 0, unitPrice: 0, finalPrice: 0, packPrice: 0, status:""}
    const [stock, setStock] = useState([initialStateStock]);
    const [isEditing, setIsEditing] = useState(false);
    const [msg, setMsg] = useState("Inventario actualizado");

    useEffect(() => {
        retrieveStock();
    }, []);

    const retrieveStock = () =>{
        const retrievedData = [];
        StockService.getStock()
        .on("value", function(res){
            res.forEach(function(child){
                if(!retrievedData.includes(child.val()))
                    retrievedData.push(child.val());
            })
            setStock(retrievedData);
        })
    }

    const handleData = (e, i) => {
        setStock(
            stock.map((item, index) => 
                index == i 
                ? {...item, [e.target.name] : e.target.value} 
                : item
            )
        )
    }

    const updateStock = () =>{
        StockService.setStock(stock);
        setMsg("Inventario actualizado");
        setIsEditing(false);
        retrieveStock();
    }
    
    if(isEditing){
        return(
            <div className="fluid-container">
                <h1 className="text-black">Inventario</h1>
                <div className="m-5">
                    <table className="table table-striped table-responsive mx-auto">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Insumo</th>
                            <th scope="col">Unidades</th>
                            <th scope="col">Precio Total</th>
                            <th scope="col">Precio Unidad</th>
                            <th scope="col">Precio público</th>
                            <th scope="col">Precio Paquete</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            stock && stock.map((item,i) => {
                                return(
                                    <tbody key={i}> 
                                        <tr>
                                            <th scope="row">{i}</th>
                                            <td>{item.name}</td>
                                            <td><input name="units" value={stock[i].units} onChange={(e) => handleData(e,i)} className="col-10" value={item.units}/></td>
                                            <td><input name="price" value={stock[i].price} onChange={(e) => handleData(e,i)} className="col-10" value={item.price}/></td>
                                            <td><input name="unitPrice" value={stock[i].unitPrice} onChange={(e) => handleData(e,i)} className="col-10" value={item.unitPrice}/></td>
                                            <td><input name="finalPrice" value={stock[i].finalPrice} onChange={(e) => handleData(e,i)} className="col-10" value={item.finalPrice}/></td>
                                            <td><input name="packPrice" value={stock[i].packPrice} onChange={(e) => handleData(e,i)} className="col-10" value={item.packPrice}/></td>
                                            <td><input name="status" value={stock[i].status} onChange={(e) => handleData(e,i)} value={item.status}/></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>

                <button className="btn btn-success btn-sm" onClick={() => {updateStock()}} data-toggle="modal" data-target="#exampleModal">Guardar</button>
                <Modal title="Inventario" msg={msg}/>
            </div>
        )
    }
    else{
        return(
            <div className="fluid-container">
                <h1 className="text-black">Inventario</h1>
                <div className="m-5">
                    <table className="table table-striped table-responsive mx-auto">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Insumo</th>
                            <th scope="col">Unidades</th>
                            <th scope="col">Precio Total</th>
                            <th scope="col">Precio Unidad</th>
                            <th scope="col">Precio público</th>
                            <th scope="col">Precio Paquete</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            stock && stock.map((item,i) => {
                                return(
                                    <tbody key={i}> 
                                        <tr>
                                            <th scope="row">{i}</th>
                                            <td>{item.name}</td>
                                            <td>{item.units}</td>
                                            <td>{item.price}</td>
                                            <td>{item.unitPrice}</td>
                                            <td>{item.finalPrice}</td>
                                            <td>{item.packPrice}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => {setIsEditing(true)}}>Editar</button>
            </div>
        )
    }
}