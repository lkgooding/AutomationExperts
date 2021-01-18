import React from 'react';
//import axios from 'axios'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
//import Services from "./pages/Services";
import TestServices from "./components/Sandbox/TestServices"
import Contact from "./pages/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={TestServices} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
