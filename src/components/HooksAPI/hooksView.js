import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

//Global
var idno;



export default (props) => {

       var [ userData, setStateuserData] = useState({
            id: '',
            name: '',
            email: '',
            phone: ''
       });

       //get parameter value
       let { idno } = useParams();

         //destructuring for object
         var {id, name, email, phone } = userData
  
         
        //RESTAPI_CALLS
        useEffect(() => {
         
             const url = ` http://localhost:3003/users/${idno}`
             axios.get(url).then( (result)=>setStateuserData(result.data));
             
         
            }, []);

    
        return (<>
             <div class="container">
                     <h2>VIEW COMPONENT PAGE</h2>
                     <p>
                        {idno} th Record Data
                     </p>


                     <ul>
                        <li>{id}</li>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{phone}</li>
                     </ul>
                     <Link className="btn btn-success" to="/hooksuser"> GOTO BACK </Link>
             </div>
        </>)
    }

