// Routings.js - Module
import React from 'react'

//Component_Nesting_into_Routings
import Home from './MainMenu/Home';
import About from './MainMenu/About';
import Services from './MainMenu/Services';
import Contact from './MainMenu/Contact';


//Routings_Package
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Routing_setup
function Routings() 
{

    return (
    <BrowserRouter>

    {/* LinkS FOR MENU  */}

    {/* <a href="home.html">Home</a> */}
    <Link to="/home">Home</Link > &nbsp;&nbsp;   

    {/* <a href="about.html">About</a> */}
    <Link to="/about">About</Link> &nbsp;&nbsp;   

    {/* <a href="services.html">Services</a> */}
    <Link to="/services">Services</Link> &nbsp;&nbsp;   

    {/* <a href="contact.html">Contact</a> */}
    <Link to="/contact">Contact</Link> &nbsp;&nbsp;   
        {/*<Home /> */}
        <Route exact path="/" component={Home} />

        <Route path="/home" component={Home} />

        {/*<About /> */}
        <Route path="/about" component={About} />

         {/*<Services /> */}
         <Route path="/services" component={Services} />

         {/*<Contact /> */}
         <Route path="/contact" component={Contact} />
      </BrowserRouter>
      )
}
export default Routings;