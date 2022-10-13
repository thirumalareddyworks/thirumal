import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

//Global
var idno



class view extends Component
{

    constructor(props) {
        super(props)

        this.state = {
             //viewdata:{}
        }
    }
    render() {
           idno = this.props.match.params.idno
        //this.props-> history, locations, match
        console.log(idno)

         var {id, name, email, phone } = this.state

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
                     <Link className="btn btn-success" to="/restapi"> GOTO BACK </Link>
             </div>
        </>)
    }

    //RESTAPI_CALLS
componentDidMount()
{
    const url = `http://localhost:3003/users/${idno}`
    axios.get(url).then( (result)=> this.setState(result.data));
    //Update apidata to empty state object via setState
} 

}

export default view;