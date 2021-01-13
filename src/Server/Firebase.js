import firebase from "firebase"
import { useState } from "react";

var firebaseConfig = {
    apiKey: "AIzaSyAbr5STLmKcyJI3-pvjzZUlDmsMfMzMo4A",
    authDomain: "alejapuppies-b5acb.firebaseapp.com",
    databaseURL: "https://alejapuppies-b5acb.firebaseio.com",
    projectId: "alejapuppies-b5acb",
    storageBucket: "alejapuppies-b5acb.appspot.com",
    messagingSenderId: "782970079902",
    appId: "1:782970079902:web:b0e56209415bc7873d498f",
    measurementId: "G-TFY57GXYL1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Auth System
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

export function getProvider(){
  return provider;
}

export function signOut(){
  firebase.auth().signOut().then(function() {
    console.log("usuario cerro sesion");
  }).catch(function(error) {
    console.log(error);
  });
}

export function isLoggedIn(){
  return firebase.auth().isLoggedIn;
}

export default function findUser(id){
  return firebase.database().ref('/users/' + id).once("value");
}

export function updateUser(id){
  return firebase.database().ref("/users/" + id).child("name").update({"name":"Jorgito"});
}

export function addAdmin(email){
  return firebase.database().ref("admin/").push({
    email:email
  });
}
