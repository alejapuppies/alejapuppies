import React from "react"
import UserProfile from "../Components/User/UserProfile"
import AdminProfile from "../Components/Admin/AdminProfile"
import firebase from "firebase";
import { Redirect, Route, Switch } from "react-router-dom";

export default class Profile extends React.Component{

    constructor(){
        super();
        this.state = {
            user:null,
            admin:null,
            loggedIn:null
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(userAuth =>{
            if(userAuth){
                var db = firebase.database();
                var ref = db.ref("/").child("admin/").child(userAuth.displayName + "-" + userAuth.uid);
                ref.on("value", (snapshot) =>{
                    //Si el usuario que ingreso esta dentro de los administradores
                    this.setState({user:userAuth, admin:snapshot.val(), loggedIn:true});
                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
                var evt = document.createEvent('Event');  
                evt.initEvent('load', false, false);  
                window.dispatchEvent(evt);

            }
            else{
                this.setState({user:null, admin:false, loggedIn:false})
            }
        });
    }

    render(){
        if(this.state.loggedIn && this.state.admin){
            return<div>
                <AdminProfile user = {this.state.user}/>
            </div>
        }
        else if(this.state.loggedIn && !this.state.admin){
            return<div>
                <UserProfile user = {this.state.user}/>
            </div>
        }
        else if(!this.state.loggedIn){
            return<div>
                <div className="mt-5 spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <h1 className="text-black">Cargando...</h1>
                <a className="btn m-5 btn-sm btn-primary" href="/">Regresar</a>
            </div>

        }
        else if(this.state.user == null){
            return<div>
                <Redirect to="/"/>
            </div>
        }
    }
}