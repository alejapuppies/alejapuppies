import React, { useEffect, useState } from "react"
import StockService from "../../Services/StockService";

export default function Stock(){
    
    const initialStateStock = {name:"", units: 0, price: 0, unitPrice: 0, finalPrice: 0, packPrice: 0, status:""}
    const [stock, setStock] = useState([initialStateStock]);

    useEffect(() => {
        const retrievedData = [];
        StockService.getStock()
        .on("value", function(res){
            res.forEach(function(child){
                retrievedData.push(child.val());
                console.log(retrievedData);
            })
            setStock(retrievedData);
        })
    }, []);
    
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
                                        <td><input className="col-10" value={item.units || ""}/></td>
                                        <td><input className="col-10" value={item.price}/></td>
                                        <td><input className="col-10" value={item.unitPrice}/></td>
                                        <td><input className="col-10" value={item.finalPrice}/></td>
                                        <td><input className="col-10" value={item.packPrice}/></td>
                                        <td><input value={item.status}/></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}