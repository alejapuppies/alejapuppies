import React from 'react';
import Home from "../src/Screens/Home"
import Menu from "../src/Components/Menu"
import Footer from "../src/Components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
