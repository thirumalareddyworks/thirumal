//Home.js-Module
import React, { Fragment } from 'react'
//import { Link } from 'react-router-dom';
import profiles from './../../assets/images/dhoni.jpg'

//Create Home Component
function Home() {

    return (<Fragment>

        <div>
            <h1 className="text-danger" style={{ fontSize: '60px' }}>MS DHONI</h1><p>He's the best captain we've had

                No cricket captain in the past has been as succesful as Dhoni across all formats of cricket.<br /> As of today, his captaincy boasts of two world titles in 50-over ODI cricket, one world title in the T20 format besides Champions <br />League and IPL, where he holds two titles in each format.</p>
            <img src={profiles} className="card-img-top" alt="reactcomp" style={{ height: '400px', width: '500px', position: 'relative', left: '900px',bottom:'60px' }} />

        </div>


    </Fragment>)

}

export default Home;

