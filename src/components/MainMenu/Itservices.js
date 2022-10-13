//service.js module 
import React from 'react'

//Nested Component
import WebApplication from './IT-SERVICES/WebApplication'
import MobileApplication from './IT-SERVICES/MobileApplication'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

var services=[
    {
        title:'Web Application',
        routeName:'/web-app'
    },
    {
        title:'Mobile Application',
        routeName:'/mobile-app'
    },
    {
        title:'UX-UI Design',
        routeName:'/ux-ui'
    },
    {
        title:'Project Support',
        routeName:'/project-support'
    }
]



//create service component
function Itservices() {

    return (<>

<BrowserRouter>
      <div class="container-fluid p-4">

      <h2>IT SERVICES</h2>

      <p> 
 
            Information technology service management is the activities that are performed by an organization to design, build, deliver, operate and control information technology services offered to customers.
            IT services refers to the application of business and technical expertise to enable organizations in the creation, management and optimization of or access.
     
      </p>

               <div class="container my-5">


               <div class="row">
            
            <div class="col-lg-3">


            {/* <ul class="list-group" >
               <li class="list-group-item">
                <Link to="/itservices/webApp">Web Application Services</Link>
               </li>
               <li class="list-group-item">
                <Link to="/itservices/mobileApp">Mobile Application Services</Link>
               </li>
               <li class="list-group-item">
                <Link to="/itservices/ux-ui">UX-UI Design Application Services</Link>
               </li>
               <li class="list-group-item">
                <Link to="/itservices/support"> Project Support Services</Link>
               </li>
              
              
            </ul> */}

               <ul class="list-group" >
                     {
                        services.map((data,i)=>
                        {
                            return( <li class="list-group-item">
                            <Link to={`/itservices${data.routeName}`}>
                            {data.title}
                            </Link>
                           </li>)
                        })
                     }
                </ul>
            </div>
            <div class="col-lg-9">

                  {/* Nested Router */}

                 

                     <Switch>
                        <Route exact path="/itservices" component={WebApplication} />
                        <Route path="/itservices/web-app" component={WebApplication} />
                        <Route path="/itservices/mobile-app" component={MobileApplication} />
                        <Route path="/itservices/ux-ui" render={()=><h2>This is UX-UI Services</h2>} />
                        <Route path="/itservices/project-support" render={()=><h2>This is Support Services</h2>} />
                     </Switch>

                  

                  {/* Nested Router */}
            </div>
        </div>

               </div>
      
      </div>
      </BrowserRouter>
    </>)
}
export default Itservices;