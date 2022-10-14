import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";

//global VARIABLE FOR restapi_url
var idno;

const url = `http://localhost:3003/users`


export default class Edit extends Component
{
    
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            txtConformation:''
        } 
    }

    //Name_input_textbox
    nameHandling = (e) =>{
        this.setState( { name: e.target.value })
    }

    //Email_input_textbox
    emailHandling = (e) =>{
        this.setState( { email: e.target.value })
    }

    //Phone_input_textbox
    phoneHandling = (e) =>{
        this.setState( { phone: e.target.value })
    }



    submitHandler = (e) =>
    {
        e.preventDefault();

        var FormData =
        {
           'name':this.state.name,
           'email':this.state.email,
           'phone':this.state.phone

        }
        
        axios.put(`${url}/${idno}`, FormData)
        .then(()=> {
             //window alert("...updated...");
             this.props.history.push('/restapi') });
    }

    render(){
        idno = this.props.match.params.idno
        console.log(idno)

         //Destructing...
        var {name, email, phone, txtConformation } = this.state

        return(<>
            <div className="container p-5">
                 <h4 className="text-center">EDIT COMPONENT PAGE</h4>
                 
                 <form onSubmit={this.submitHandler.bind(this)}>
                       
                        <div class="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" 
                            value={name}
                            onChange={this.nameHandling.bind(this)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" 
                            value={email}
                            onChange={this.emailHandling.bind(this)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" className="form-control" 
                            value={phone}
                            onChange={this.phoneHandling.bind(this)}/>
                        </div>
                        <div className="mb-3">
                             <Link className="btn btn-success mx-2" to="/restapi" >GOTO BACK</Link>
                             <button type="submit" className="btn btn-warning text-white" value="update">UPDATE</button>
                        </div>
                        <p className="text-primary">{txtConformation}</p>
                 </form>
            
            </div>
        </>)
    }

    //Restapi_calls
    componentDidMount()
     {
         
         axios.get(`${url}/${idno}`).then((result) => this.setState( result.data)); 
     }
 
}