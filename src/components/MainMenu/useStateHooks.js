import  { React, useState } from "react";

export default (props) => {

    //State Object Implementation
    var [stateEmail,setStateEmail] = useState("thirumal@gmail.com")

    
    //State Object Implementation
    let handleStateEmail = () => 
    {
        setStateEmail("charan@gmail.com");
    }
    return (<>
                 <div class="container">
                 <h1>React Hooks UseState</h1>

                 {stateEmail} <br /><br />

                 <button onClick={handleStateEmail}>Update Email</button>
                 </div>

                 
    </>)
}
// const my={props}=>
// {

// }