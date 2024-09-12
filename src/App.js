import React from "react";
import "./App.css";
import "./mobile.css";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import Home from "./components/home";
import News from "./components/news";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return ( 
    <>
      <Home />
      <News />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
