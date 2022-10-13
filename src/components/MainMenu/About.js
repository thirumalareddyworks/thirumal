// About.js - Module
import React, { Fragment } from 'react'
import profile from './../../assets/images/profile.jpg'

//Create About Component
function About() {

    return (<Fragment>

<div className="card" >
  <img src={profile} className="card-img-top" alt="reactcompo" style={{heiht:'200px',width:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title">MS DHONI</h5>
    <p className="card-text">Mahendra Singh Dhoni is an Indian former professional cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is a right handed wicket-keeper batsman.</p>
  </div>
</div>

        <hr />
    </Fragment>)
}
export default About;