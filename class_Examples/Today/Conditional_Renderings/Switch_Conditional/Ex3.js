// import React, { Component } from "react";


// //Import Child Components
// import AngularApp from './courses/AngularApp';
// import ReactApp from './courses/ReactApp';
// import NodeApp from './courses/NodeApp';
// import PageNotFound from './PageNotFound';

// const ConditionalRendering=()=> {

//     var course="node",ele_variable;

//     switch(course )
//     {
//         case 'angular':
//                   ele_variable=(<> <h4> <AngularApp /> </h4> </>); break;

//         case 'react':
//                     ele_variable=(<> <h4> <ReactApp /> </h4> </>); break;          

//         case 'node':
//                   ele_variable=(<> <h4> <NodeApp /> </h4> </>); break;

//         default:
//                   ele_variable=(<> <h4> <PageNotFound/> </h4> </>);
//     }

//     return(<>
//         <div className="container p-5">
   
   
//            <form>
//                <input type="text" /> <br />
//            </form>
   
//            {ele_variable}

//            <Component />

//         </div>
//    </>)
// }
// export default ConditionalRendering;