import React from "react"

//Global variables
//var Mobileno=1234567891;


class Myclass extends React.Component
{

    //class properties
    id=1001;
    email="thirumal@gmail.com"


    //constructor
    constructor(props)
    {
          super(props);

          //step-1 State Object Initialization
          this.state={
            email: 'charan@gmail.com',
            phone: 1234567890
          }
    }


    stateChanges=() =>
    {
        this.setState({

            email:`thirumalap@gmail.com`,
            phone: 1231231231
        })
    }

    //Prepare The Component_Input
    //class_method
    render() {


        return(<>
               <div className="container p-5">

               <h1>REACT CLASS COMPONENT & STATE & EVENTS</h1>

                 {/* Step:2 Access State Object properties from JSX */}
                <p> Email is: {this.state.email}</p>
                {/* Step:3 Change State Object Data by setState */}
                  <button onClick={() => this.setState({ email: `thirumala@gmail.com`}) }>Change My Email</button>

                   <br /><br />

                   <p>  Phone number is: {this.state.phone}</p>
                      {/* Step:3 Change State Object Data by setState */}
                  <button onClick={() => this.setState({ phone: 9999999999 }) }>Change My phone no</button>
                  
                  <br/><br />
                  <button onClick={()=> this.stateChanges()}>Update All State Properties</button>

               </div>
        </>);
    }
}



export default Myclass