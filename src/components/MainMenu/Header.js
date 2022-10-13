//Header.js Module
import React from 'react'
import { NavLink } from 'react-router-dom';
//import Restapi from './Restapi';

function Header() {

    var MenuNames=["Home","About","Services","Itservices","Contact","Myclass","Lifecycle","Restapi","RB","Signup",
    "Rrc","RHuseState","RHuseEffect","Pagination","Hooksuser","HooksSignup","HooksRedux"]
    return (<>

        {/* NavLinkS FOR MENU  */}



        <nav className="navbar navbar-expand-lg navbar-white px-3 " 
            style={
                {
                    backgroundColor: '#475562',
                    borderBottom: '0.5px white solid',
                    borderTop: '0.5px white solid',
                    // justifyContent:'end',

                }
            }>
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end"  id="navbarNav" >
                    {/*<ul className="navbar-nav ">
                        <li className="nav-item px-3">
                            <NavLink activeStyle={{ backgroundColor: 'black' }} className="nav-NavLink active text-white" to="/home" style={{textDecoration:"none"}}>Home</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink activeStyle={{ backgroundColor: 'black' }} className="nav-NavLink text-white" to="/about" style={{textDecoration:"none"}}>About</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className="nav-NavLink text-white" activeClassName="bg-dark" to="/services" style={{textDecoration:"none"}}>Services</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className="nav-NavLink text-white" activeClassName="bg-dark" to="/contact" style={{textDecoration:"none"}}>Contact</NavLink>
                        </li>
                    </ul>  */}

                        <ul className="navbar-nav  ">
                        {
                            MenuNames.map((data, i) => 
                            <li className="nav-item px-2" key={i}>
                            <NavLink activeClassName="bg-dark" className="nav-NavLink text-white" to={`/${data.toLowerCase()}`} style={{textDecoration:"none"}}>{data}</NavLink>
                        </li>)
                        
                            
                        }
                        </ul> 
                        {/* <ul className="navbar-nav ">

                         <li className="nav-item px-1">
                            <NavLink activeClassName="bg-dark" className="nav-NavLink text-white" to="/home">Home</NavLink>
                         </li>
                         <li className="nav-item px-1">
                            <NavLink activeClassName="bg-dark" className="nav-NavLink text-white" to="/about">About</NavLink>
                         </li>
                         <li className="nav-item px-1">
                            <NavLink activeClassName="bg-dark" className="nav-NavLink text-white" to="/services">Services</NavLink>
                         </li>
                         <li className="nav-item px-1">
                            <NavLink activeClassName="bg-dark" className="nav-NavLink text-white" to="/itservices">Itservices</NavLink>
                         </li>
                         <li className="nav-item px-1">
                            <NavLink activeClassName="bg-dark" className="nav-NavLink text-white" to="/contact">Contact</NavLink>
                         </li>
                         </ul>  */}
                </div>
            </div>
        </nav>


        <br /> <br /> <br />

    </>)
}


export default Header;