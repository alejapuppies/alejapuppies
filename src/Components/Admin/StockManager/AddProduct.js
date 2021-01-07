import React, { useState } from "react"
import Modal from "../../Containers/Modal";
import StockService from "../../Services/StockService";

export default function AddProduct(){

    const initialStateProduct = {name: "", units:"", price: "", unitPrice: "", finalPrice: "", packPrice:"", status: ""}
    const [product, setProduct] = useState(initialStateProduct);
    const [msg, setMsg] = useState("");

    const handleDataProduct = (e) =>{
        if(e.target.name == "name"){
            var name = e.target.value.charAt(0).toUpperCase()
            setProduct({
                ...product, [e.target.name]: name + e.target.value.substring(1, e.target.value.length)
            });
        }
        else{
            setProduct({
                ...product, [e.target.name]: e.target.value
            });
        }
    }

    const checkData = () =>{
        if(product.name === ""){
            setMsg("Llena los campos obligatorios");
        }
        else{
            StockService.addProduct(product)
            .then(res => {
                setProduct(initialStateProduct);
                setMsg("Producto guardado");
            }).catch(error => {
                setMsg("Ha ocurrido un error");
                console.log(error);
            })
        }
    }

    return(
        <div className="fluid-container">
            <h1 className="text-black">Agregar producto</h1>
            <div className="row w-100 col-12 mt-3">
                <div className="col-10 mx-auto mt-1">
                    <label className="text-black">Insumo: (*)</label>
                    <input name="name" value={product.name || ""} type="text" className="form-control" onChange={(e) => handleDataProduct(e)}/>
                </div>
                <div className="col-10 col-sm-4 col-xs-4 col-md-4 mx-auto mt-1">
                    <label className="text-black">Unidades:</label>
                    <input name="units" value={product.units || ""} type="text" className="form-control col-6 mx-auto" onChange={(e) => handleDataProduct(e)}/>
                    <label className="text-black">Precio:</label>
                    <input name="price" value={product.price || ""} type="text" className="form-control col-6 mx-auto" onChange={(e) => handleDataProduct(e)}/>
                </div>
                <div className="col-10 col-sm-4 col-xs-4 col-md-4 mx-auto mt-1">
                    <label className="text-black">Precio Unidad:</label>
                    <input name="unitPrice" value={product.unitPrice || ""} type="text" className="form-control col-6 mx-auto" onChange={(e) => handleDataProduct(e)}/>
                    <label className="text-black">Precio Cliente:</label>
                    <input name="finalPrice" value={product.finalPrice || ""} type="text" className="form-control col-6 mx-auto" onChange={(e) => handleDataProduct(e)}/>
                </div>

                <div className="col-10 col-sm-4 col-xs-4 col-md-4 mx-auto mt-1">
                    <label className="text-black">Precio Paquete:</label>
                    <input name="packPrice" value={product.packPrice || ""} type="text" className="form-control col-6 mx-auto" onChange={(e) => handleDataProduct(e)}/>
                    <label className="text-black">Status:</label>
                    <input name="status" value={product.status || ""} type="text" className="form-control col-6 mx-auto" onChange={(e) => handleDataProduct(e)}/>
                </div>
                
            </div>

            <div className="mt-5">
                <button className="btn btn-success" onClick={() => {checkData()}} data-toggle="modal" data-target="#exampleModal">Guardar</button>
            </div>

            <Modal title = "Añadir producto" msg = {msg}/>

        </div>
    )
}