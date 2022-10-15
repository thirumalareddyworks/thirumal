import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
//import {Link} from 'react-router-dom'
 
const url = `http://localhost:3003/users`
export default(props)=> {
      
var [userData,setStateUserData]=useState({
             name:'',
             email:'',
             phone:'',
             textConformation:''
         })
         var {uname,email,phone,textConformation}=userData;
     /*
    unameHandling =(e) =>
    {
      this.setState({uname:e.target.value})

    }
    emailHandling =(e) =>
    {
      this.setState({email:e.target.value})

    }
    phoneHandling =(e) =>
    {
      this.setState({phone:e.target.value})

    }
     */

    let formDatahandling=(e)=>
    {
        setStateUserData({...userData,[e.target.name]:e.target.value});
    }
    submitHandler = (e) => {
        {
            e.preventDefault();

           var formdata ={
            name:`${userData.uname}`,
            email:`${userData.email}`,
            phone:`${userData.phone}`
           }
        }
        //alert(JSON.stringify(FormData));
        axios.post(url,formdata).then(()=>{
            window.alert("....CREATED,..")
            props.history.push('/hooksuser'); })
        
        
       // this.props.history.push('/restapi'))
       // window.alert("....CREATED,.."));
        // .then(()=>this.setState({txtConformation:'Account created...'}))
           // .catch(()=>this.setState({txtConformation:'Account failed...'}))
    } 
           
        return(<>
        
        <div className='container p-3'>
            <h4 className='py-3  text-center'>User Registration</h4>
        <div className='container w-50'>
            <form onSubmit={submitHandler.bind(this)}>
            <div class="mb-3">
            <label className='form-label'>Name</label>
            <input type="text" class="form-control" value={uname} name="name" onChange={  formDatahandling.bind(this)} />
        </div>
        <div class="mb-3">
            <label className='form-label'>Email</label>
            <input type="email" class="form-control" value={email}  name="email"  onChange={  formDatahandling.bind(this)} />
        </div>
        <div class="mb-3">
            <label className='form-label'>Phone</label>
            <input type="number" class="form-control" value={phone} name="phone" onChange={ formDatahandling.bind(this)} />
        </div>
        <div class="mb-3">
           
            <button type="submit" class="btn-btn-primary">create acount</button>
        </div>
        <p class="text-primary">{textConformation}</p>
            </form>
        </div>
         

</div>
        
        
            
</> )
    }