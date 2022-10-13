import {React, Component} from 'react';

//step-1
import { connect } from 'react-redux';


//step-3
import empAction from '../../Actions/empAction.js' //ExternalData-RESTAPI
import userAction from '../../Actions/usersAction.js'
import studentsAction from '../../Actions/studentsAction.js'

//step4
import { bindActionCreators } from 'redux';

class ReactReduxConnection extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    componentDidMount()
    {
        this.props.empAction();
        this.props.userAction();
        this.props.studentsAction();
    }

    render() {
        return (<>
        <div className='container py-2'>

            <h2 className='text-center'>ReactReduxConnection Example</h2>

  <h3>Synchronous Data from Redux_Actions</h3>
            {
                this.props.empdata.map((res,i)=>
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
    this.props.userdata.map((res,i)=>
    {
       return(<ul key={i}>
        <li>{res.id}</li>
        <li>{res.name}</li>
        <li>{res.email}</li>
       </ul>)
    })
}


<h3>ASynchronous Data-2[LOCAL RESTAPI] from Redux-Actions</h3>

{
    this.props.studentdata.map((res,i)=>
    {
       return(<ul key={i}>
        <li>{res.id}</li>
        <li>{res.name}</li>
        <li>{res.email}</li>
       </ul>)
    })
}
        </div>
        </>)
    }
}

//step-6
const mapStateToProps = (state) => {

    //get the data from the redux_store by using Reducers[state objects]

    console.log(state)

    return({
        empdata: state.empReducer,
        userdata: state.userReducer,
        studentdata: state.studentReducer
    })
}
//step-6
const mapDispatchToProps = (dispatch) => {
    //calling Redux actions
    return bindActionCreators({ empAction, userAction,studentsAction }, dispatch)
}


//export default ReactReduxConnection-> Normal component export

//step-2
export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection)


