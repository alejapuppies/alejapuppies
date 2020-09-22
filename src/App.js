import React from 'react';
import Home from "../src/Screens/Home"
import Menu from "../src/Components/Menu"
import Profile from "../src/Screens/Profile"
import Footer from "../src/Components/Footer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/profile" component = {Profile}/>
        </Switch>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
