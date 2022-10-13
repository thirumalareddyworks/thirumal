// import React from "react";

import { Component } from "react";
import axios from "axios";
import { indigo } from "@mui/material/colors";

const url = `http://localhost:3003/users`

export default class Signup extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
              uname: '',
              email: '',
              phone: '',
              textConformation: ''
        } 
    }
    //Name_input_textbox
    unameHandling=(e) => {
        this.setState({uname:e.target.value})
    }

     // EMAIL_input_textbox
     emailHandling=(e) => {
        this.setState({email:e.target.value})
    }

     //PHONE_input_textbox
     phoneHandling=(e) => {
        this.setState({phone:e.target.value})
    }


    submitHandler=(e)=>
    {
        e.preventDefault();
        var FormData=
        {
            'name': this.state.uname,
            'email': this.state.email,
            'phone': this.state.phone
        } 
        alert(JSON.stringify(FormData));

        // axios.post(url, FormData).then( ()=>window.alert("...CREATED...."))
        // .catch(()=> window.alert("ERROR"));

        //  axios.post(url, FormData).then( ()=>this.setState({textConformation: "...Accounted Created...."}))
        //  .catch(()=> this.setState({textConformation: "...Accounted Failed...."}))


        axios.post(url, FormData).then( ()=>{ 
            //window.alert("....CREATED....")
            this.props.history.push('/restapi')});
    }

    
    render() {

        console.log(this.props)

         //Destructuring...
        var {uname, email, phone, textConformation} = this.state
        return (<>
           <div className="container p-3">

             <h4 className="py-3 text-center">USER REGISTRATION</h4>

             <div className="container w-75">

             <form onSubmit={this.submitHandler.bind(this)}>
             <div class="mb-3">
             <label class="form-label">Name</label>
             <input type="text" class="form-control" value={uname} onChange={this.unameHandling.bind(this)} />
             <p>{uname}</p>
            </div>

             <div class="mb-3">
             <label class="form-label">Email</label>
             <input type="email" class="form-control" value={email} onChange={this.emailHandling.bind(this)} />
             <p>{email}</p>
            </div>

            <div class="mb-3">
             <label class="form-label">Phone</label>
             <input type="number" class="form-control" value={phone} onChange={this.phoneHandling.bind(this)} />
             <p>{phone}</p>
            </div> 

            <div class="mb-3">
             
             <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
            </div>

            <p class="text-primary">{textConformation}</p>
            
             </form>

             </div>
           </div>
        
        </>)
    }
}