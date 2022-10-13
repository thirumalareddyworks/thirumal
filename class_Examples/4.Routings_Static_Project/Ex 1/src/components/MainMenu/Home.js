//Home.js-Module
import React, { Fragment } from 'react'

//Create Home Component
function Home() {

    //variable
    var cname = "HOME COMPONENT"

    var msg = "A good home provides protection. Children are less at risk of violence and sexual abuse. They are less likely to be forced into child labour, married off at a young age or forcibly recruited by armed groups. A home ensures that displaced people have better access to humanitarian aid."

    return (<Fragment>
    
        <h1>{cname}</h1>

        <p className="para">{msg}</p>

        </Fragment>)
    
}

export default Home;

