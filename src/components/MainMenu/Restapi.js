import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


//axios.get(url)

//Global_variable for RESTAPI_URL
const url = `http://localhost:3003/users`//array type of Object
class Restapi extends Component {

constructor(props) {
    super(props)

    this.state = 
    {
      userData: [] //empty-array
    }

}

//Delete the data
// DeleteHandler = (id) =>
// {
//       window.confirm(`Selected Recorded Number Is ${id}  `)
// }


DeleteHandler=(id)=>
    {
      
        
       if( window.alert(`Selected Recors number is ${id} ?`)){
        axios.delete(`${url}/${id}`)
        axios.get(url).then((result)=> this.setState({userData:result.data})) 
       }
       
    }

render() {
    return (<>
        <div className="container p-5">


            <h3 className="text-center">FETCH RESTAPI DATA USING LOCAL URL/CLIENT</h3>

            <table className="table table-dark table-bordered">

             <thead className="table table-light  my-5">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th colSpan="3" className="text-center">ACTION</th>
                </tr>
             </thead>
           
            <tbody>

            {
                this.state.userData.map( (res,i)=>{
                    return(<tr key={i}>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.phone}</td>
                        <td>
                            <Link to={`/restapi/view/${res.id}`} className="btn btn-primary">View</Link>
                        </td>
                        <td>
                            <Link to={`/restapi/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        
                        <td><button  onClick={()=>this.DeleteHandler(res.id)} className="btn btn-danger">Delete</button></td>
                    
                    </tr>)
                })
            }
            </tbody>
             </table>

        </div>
    </>)
}

//RESTAPI_CALLS
componentDidMount()
{
    axios.get(url).then( (result)=> this.setState({  userData:result.data  })).catch()
}

}


export default Restapi
