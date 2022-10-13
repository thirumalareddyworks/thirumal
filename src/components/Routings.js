// Routings.js - Module
import React from 'react';

//Routings_Package
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

//Functional_Components
import Header from './MainMenu/Header.js';
import Footer from './MainMenu/Footer.js';
import Home from './MainMenu/Home.js';
import About from './MainMenu/About.js';
import Services from './MainMenu/Services.js';
import Contact from './MainMenu/Contact.js';
import Pagenotfound from './Pagenotfound.js';
import Itservices from './MainMenu/Itservices.js';


//class_Components
import Myclass from './Myclass';
import Lifecycle from './MainMenu/Lifecycle.js';
import Restapi from './MainMenu/Restapi';
import view from './MainMenu/RESTAPI/view.js';
import Edit from './MainMenu/RESTAPI/Edit.js';
import ReactBootstrap from './MainMenu/ReactBootstrap.js';
import Signup from './MainMenu/Signup.js';
import ReactReduxConnection from './MainMenu/ReactReduxConnection.js';


//React Hooks
import RHuseState from './MainMenu/useStateHooks'
import RHuseEffect from './MainMenu/useEffcetHooks'
import Pagination from './MainMenu/Pagination'
import Hooksuser from './HooksAPI/hooksUser'
import HooksView from './HooksAPI/hooksView.js';
import HooksEdit from './HooksAPI/hooksEdit.js';
import HooksSignup from './HooksAPI/hooksSignup';
import HooksRedux from './HooksRedux/HooksRedux.js';

//Routings_setup
function Routings() 
{

    return (
    <BrowserRouter>

  
        {/* Navbar Links  */}
           <Header />
        {/* Navbar Links */}

   <Switch>

        {/*<Home /> */}
        <Route exact path="/" component={Home} />

        <Route path="/home" component={Home} />

        {/*<About /> */}
        <Route path="/about" component={About} />

         {/*<Services /> */}
         <Route path="/services" component={Services} />

         {/*<Services /> */}
         <Route path="/itservices" component={Itservices} />

         {/*<Contact /> */}
         <Route path="/contact" component={Contact} />

         
         {/*<Myclass /> */}
         <Route path="/myclass" component={Myclass} />

         {/*<Lifecycle /> */}
         <Route path="/lifecycle" component={Lifecycle} />

          {/*<Restapi /> */}
          <Route exact path="/restapi" component={Restapi} />
          
           {/*<view with Router parameter /> */}
           <Route path="/restapi/view/:idno" component={view} />

             {/*<Edit with Router parameter /> */}
             <Route path="/restapi/edit/:idno" component={Edit} />

           {/*<ReactBootstrap /> */}
           <Route exact path="/rb" component={ReactBootstrap} />
          
           {/*<Signup /> */}
           <Route exact path="/signup" component={Signup} />

            {/*<ReactReduxConnection />*/}
           <Route exact path="/rrc" component={ReactReduxConnection} />

            {/*<RHuseState />*/}
           <Route path="/rhusestate" component={RHuseState} />

            {/*<RHuseEffect />*/}
            <Route path="/rhuseEffect" component={RHuseEffect} />

             {/*<Pagination />*/}
             <Route path="/pagination" component={Pagination} />

             {/*<Hooksuser />*/}
             <Route exact path="/hooksuser" component={Hooksuser} />
             <Route path="/hooksuser/view/:idno" component={HooksView} />
             <Route path="/hooksuser/edit/:idno" component={HooksEdit} />
          
           {/*<HooksSignup />*/}
           <Route path="/hooksSignup" component={HooksSignup} />\

            {/*<HooksRedux />*/}
            <Route path="/hooksredux" component={HooksRedux} />

          {/* Auto Redirect To Home Component if Invalid path from URL Address */}
          <Redirect to="/home" />

         {/*<Contact /> */}
         <Route component={Pagenotfound} />
    </Switch>     
        {/* Footer Section  */}
        <Footer />
        {/* Footer Section */}

      </BrowserRouter>
      )
}
export default Routings;