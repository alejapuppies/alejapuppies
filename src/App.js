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
import Login from './Screens/Login';
import { UserContext } from './UserContext';
import { PrivateRouteLogin } from './Components/PrivateRouteLogin';

function App() {
  
  const [user, setUser] = useState({displayName:"Guest", email:"Undefinded"});
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    firebase.auth().onAuthStateChanged(userAuth =>{
      if(userAuth){
        setUser(userAuth);
      }
      else{
        setUser({displayName:"Guest", email:"Undefined"});
      }
      setLoading(false);
    });
  }, []);

  if(loading){
    return(
      <></>
    )

  }else{
    return (
      <div className="App">
        <Menu/>
        
        <BrowserRouter>
          <Switch>
            <UserContext.Provider value = {user}>
              <Route exact path = "/" component = {Home}/>
              <PrivateRoute exact path = "/profile" component = {Profile} user = {user}/>
              <PrivateRouteLogin exact path = "/login" component = {Login}/>
            </UserContext.Provider>
          </Switch>
        </BrowserRouter>

        <Footer/>
      </div>
    );
  }
}

export default App;
