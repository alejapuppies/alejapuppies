import React, { useEffect, useState } from "react"
import UserProfile from "../Components/User/UserProfile"
import AdminProfile from "../Components/Admin/AdminProfile"
import firebase from "firebase";
import { Redirect, Route, Switch } from "react-router-dom";
import UserService from "../Components/Services/UserService"
import AdminService from "../Components/Services/AdminService";

export default function Profile(){
    
    const [user, setUser] = useState(firebase.auth().currentUser);
    const [userInfo, setUserInfo] = useState();
    const [isAdmin, setIsAdmin] = useState(null);
    const [isLoggedIn, setLogginIn] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isRegistered, setIsRegistered] = useState(UserService.isRegistered);

    useEffect(() =>{
        firebase.auth().onAuthStateChanged(userAuth =>{
        if(userAuth){
            UserService.setUser(userAuth);
            setUser(userAuth);
            setUserInfo(userAuth);
            setLogginIn(true);
            AdminService.findAdminByEmail(userAuth.email)
            .on("child_added", function(snapshot) {
                if(snapshot.child("email").val() == userAuth.email){
                    setIsAdmin(true);
                    AdminService.updateAdmin(userAuth, snapshot.val())
                    .then(res =>{
                        console.log("Actualizado");
                    }).catch(error => {
                        console.log(error);
                    })
                }
                setLoading(false);
            });
            isUserRegistered();
        }
        else{
            setUser(null);
            setIsAdmin(null);
            setLogginIn(false);
        }
        });
    }, []);

    function isUserRegistered(){
        var email = firebase.auth().currentUser.email;
        UserService.findUserByEmail(email)
        .on("child_added", (snapshot) => {
            if(snapshot.val().email == email){
                setUserInfo(snapshot.val());
                setIsRegistered(true);
            }
        });
    }
    
    if(loading){
        return<div>
            <div className="mt-5 spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <h1 className="text-black">Cargando...</h1>
            <a className="btn m-5 btn-sm btn-primary" href="/">Regresar</a>
        </div>

    }
    else if(isLoggedIn && isAdmin){
        return<div>
            <AdminProfile user = {user}/>
        </div>
    }
    else if(isLoggedIn && !isAdmin){
        return<div>
            <UserProfile user = {userInfo}/>
        </div>
        
    }
    else if(user == null || user == undefined){
        return<div>
            <Redirect to="/"/>
        </div>
    }
    
}