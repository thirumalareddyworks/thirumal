import {React, useEffect} from 'react';
import { connect } from 'react-redux';

import empAction from '../../Actions/empAction.js' 
import userAction from '../../Actions/usersAction.js'
import studentsAction from '../../Actions/studentsAction.js'
import { bindActionCreators } from 'redux';

let HooksRedux = (props) => {
    
    useEffect(() => 
     {
            props.empAction();
            props.userAction();
            props.StudentAction();
    }, [])

        return (<>
        <div className='container py-2'>
            <h2 className='text-center'>ReactReduxConnection Example</h2>

  <h3>Synchronous Data from Redux_Actions</h3>

           

            {
                props.empdata.map((res,i)=>
                {
                   return(<ul key={i}>
                    <li>{res.id}</li>
                    <li>{res.name}</li>
                    <li>{res.email}</li>
                   </ul>)
                })
            }


<h3>ASynchronous Data-1[GLOBAL RESTAPI] from Redux-Actions</h3>

{
    props.userdata.map((res,i)=>
    {
       return(<ul key={i}>
        <li>{res.id}</li>
        <li>{res.name}</li>
        <li>{res.email}</li>
       </ul>)
    })
}

{/* 
<h3>ASynchronous Data-2[LOCAL RESTAPI] from Redux-Actions</h3>

{
    props.studentdata.map((res,i)=>
    {
       return(<ul key={i}>
        <li>{res.id}</li>
        <li>{res.name}</li>
        <li>{res.email}</li>
       </ul>)
    })
} */}
        </div>
        </>)
    }



const mapStateToProps = (state) => {

    return({
        empdata: state.empReducer,
        userdata: state.userReducer,
        studentdata: state.studentReducer
    })
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ empAction, userAction,studentsAction }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HooksRedux)


