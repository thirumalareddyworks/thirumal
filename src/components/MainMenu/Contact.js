//Contact.js- Module
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import EmpAction from '../../Actions/empAction.js';

//Create Contact Component
class Contact extends Component
{
   constructor(props)
   {
    super(props);
    this.state={}
   }

   componentDidMount() 
   {
    this.props.EmpAction()
   }

   render()
   {
    return (<>

        <h1 className="text-center text-primary">CONTACT TO DHONI</h1>
        <div className="Containter bg-info pt-3">
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="text-white">
                            <li><b>Cricketer MS Dhoni Contact Information</b></li>
                            <li>Office Address: Rhiti Sports Management (P) Ltd, 7, Mani Prabha Farm House, Sector-D, Ram Mandir Road, Vasant Kunj, New Delhi 110070, India.</li>
                            <li>Phone Number: +91-11-66465800.</li>
                            <li>MS Dhoni Manager Phone Number: +91-22-67254873 (Arun Pandey)</li>
                            <li>Email: info.rhiti@rhitisports.com.</li>
                        </ul>
                        </div>
                        </div>
                        </div>

                        <br /><br />
                        {
                            this.props.empinfo.map((result,i) => {
                                return (<ul key={i}>
                                    <li>{result.id}</li>
                                    <li>{result.name}</li>
                                    <li>{result.email}</li>
                                </ul>)
                            })
                        }
        </>)
   }
}


function mapStateToProps(state) {
return({
    empinfo:state.empReducer
})

}

function mapDispatchToProps(dispatch) {
return bindActionCreators({EmpAction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);