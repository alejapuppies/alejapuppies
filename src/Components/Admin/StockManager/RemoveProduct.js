import React, { useState } from "react";
import Modal from "../../Containers/Modal";
import StockService from "../../Services/StockService";

export default function RemoveProduct(){

    const [name, setName] = useState("");
    const [insumo, setInsumo] = useState(null);
    const [msg, setMsg] = useState("");

    const handleName = (e) =>{
        let initianCharUpper = e.target.value.charAt(0).toUpperCase();
        setName(initianCharUpper +  e.target.value.substring(1, e.target.value.length));
    }

    const findProductByName = () =>{
        StockService.findProductByName(name)
        .then(res => {
            console.log(res);
            if(res.val()){
                setInsumo(res.val());
                setMsg("Producto encontrado");
            }
            else{
                setMsg("Producto no encontrado");
            }
        }).catch(error =>{
            setMsg("Ha ocurrido un error");
            console.log(error);
        })
    }

    const removeProduct = () =>{
        StockService.removeProductByName(name)
        .then(res =>{
            setMsg("Producto eliminado");
            setInsumo(null);
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <div className="fluid-contaienr">
            <h1 className="text-black">Eliminar Insumo</h1>
            <div>
                <label className="text-black">Nombre del Insumo</label>
                <input onChange={(e) => handleName(e)} name="name" value={name || ""} className="form-control col-12 col-sm-6 col-xs-6 col-md-6 mx-auto"></input>
                <button className="btn btn-primary btn-sm m-3" onClick={() => findProductByName()} data-toggle="modal" data-target="#exampleModal">Buscar</button>
            </div>

            <ShowProductInfo insumo = {insumo} removeProduct = {removeProduct}/>
            <Modal title = "Eliminar Producto" msg={msg}/>
        </div>
    )
}

const ShowProductInfo = (props) =>{
    const insumo = props.insumo;
    const removeProduct = props.removeProduct;

    if(props.insumo){
        return(
            <div className="fluid-container">
                <div className="row w-100 mx-auto m-3">
                    <strong className="text-black mx-auto">Insumo</strong>
                    <strong className="text-black mx-auto">Unidades</strong>
                    <strong className="text-black mx-auto">Precio</strong>
                    <strong className="text-black mx-auto">Precio Cliente</strong>
                </div>
                <div className="row w-100 mx-auto m-3">
                    <h6 className="text-black mx-auto">{insumo.name || ""}</h6>
                    <h6 className="text-black mx-auto">{insumo.units || ""}</h6>
                    <h6 className="text-black mx-auto">{insumo.price || ""}</h6>
                    <h6 className="text-black mx-auto">{insumo.finalPrice || ""}</h6>
                </div>

                <button className="btn btn-danger btn-sm" onClick={() => removeProduct()} data-toggle="modal" data-target="#exampleModal">Eliminar</button>

            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}