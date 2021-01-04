import React, { useEffect, useState } from 'react';
import Home from "../src/Screens/Home"
import Menu from "../src/Components/Containers/Menu"
import Profile from "../src/Screens/Profile"
import Footer from "../src/Components/Containers/Footer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import PrimeraConsulta from './Components/Forms/PrimeraConsulta';
import RegisterUser from './Components/User/RegisterUser';
import firebase from "firebase"
import { PrivateRoute } from './Components/PrivateRoute';
import UserService from './Components/Services/UserService';

function App() {
  
  const [user, setUser] = useState();

  useEffect(() =>{
    firebase.auth().onAuthStateChanged(userAuth =>{
      if(userAuth){
        setUser(userAuth);
        UserService.setUser(userAuth);
      }
      else{
        setUser(null);
        UserService.setUser(null);
      }
    });
}, []);

  useEffect(() => {
  })


  return (
    <div className="App">
      <Menu/>
      
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/profile" component = {Profile} user = {user}/>
          {/*<Route exact path = "/register" component={RegisterUser} user = {UserService.getUserData()}/>*/}
        </Switch>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
