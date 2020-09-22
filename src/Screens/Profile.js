import React from "react"
import UserInfo from "../Components/UserInfo"
import firebase from "firebase";
import {userContext} from "../Components/userContext"
import { Route, Switch } from "react-router-dom";
import Home from "../Screens/Home"

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
                <h1>admin</h1>
                <UserInfo user = {this.state.user}/>
            </div>
        }
        else if(this.state.loggedIn && !this.state.admin){
            return<div>
                <h1>Usuario</h1>
                <UserInfo user = {this.state.user}/>
            </div>
        }
        else if(!this.state.loggedIn || this.state.user == null){
            return<div>
                <Switch>
                    <Route exact path="/profile" component={Home}/>
                </Switch>
            </div>
        }
    }
}