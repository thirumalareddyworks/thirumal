//service.js module 
import React from 'react'

//Import External Local JSON Data into Component
import ServiceData from './../../assets/json/Services.json'

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCoffe} from '@fortawesome/free-soild-svg-icons'
//styles
var bgc = { backgroundColor: '#4267B2' }



//create service component
function Services() {

    return (<>
        <div className="container-fluid" style={bgc}>
            <div className="container p-5 text-center">
                <h1 className="pt-2 pb-5">Ms Dhoni Services</h1>
                <div className="row">
                              
                {
                    ServiceData.map( (data,i)=>{
                        
                        return(<div className="col-lg-4">
                                 <div className=" card text-center text-white p-3" style={bgc}>
                                      <div className="card-body">
                                         <h3 className="py-3">{data.title}</h3>
                                         <p className="text-jus">{data.description}</p>
                                     </div>
                                 </div>
                             </div>)
                    })
                }
                              

                    {/* <div className="col-lg-4">
                        <div className=" card text-center text-white p-3" style={bgc}> */}

                            {/* <p className="text-center">
                            <fontawesomeIcon icon = {fa-coffee} size= "4x"
                            className="fa-bold text-success"/>
                             </p> */}

                            {/* <div className="card-body">
                                <h3 className="py-3">2011 WORLD CUP</h3>
                                <p className="text-jus">MS Dhoni bat, MS Dhoni 2011 World Cup. MS Dhoni will forever be remembered as the man who led India to their second ODI World Cup title after a long wait of 28 years. On 2nd April 2011, India defeated Sri Lanka by 6-wickets to lift the coveted trophy, and with it, Dhoni and his team became immortal.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className=" card text-center text-white p-3" style={bgc}> */}

                            {/* <p className="text-center">
                            <fontawesomeIcon icon = {fa-coffee} size= "4x"
                            className="fa-bold text-success"/>
                        </p> */}
{/* 
                            <div className="card-body">
                                <h3 className="py-3">T20 WORLD CUP 2007</h3>
                                <p className="text-jus">The MS Dhoni-led India clinched the inaugural T20 World Cup title in 2007 in Johannesburg, South Africa, on this very day, September 24. The MS Dhoni-led India clinched the inaugural T20 World Cup title in 2007 in Johannesburg, South Africa, on this very</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className=" card text-center text-white p-3" style={bgc}> */}

                            {/* <p className="text-center">
                            <fontawesomeIcon icon = {fa-coffee} size= "4x"
                            className="fa-bold text-success"/>
                        </p> */}
{/* 
                            <div className="card-body">
                                <h3 className="py-3">TEXT CAREER</h3>
                                <p className="text-jus">India became the first team in more than 40 years to whitewash Australia in a Test series and Dhoni now had the most Test wins for an Indian captain under his belt.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"> */}
                    {/* <div className="col-lg-4">
                        <div className=" card text-center text-white p-3" style={bgc}> */}

                            {/* <p className="text-center">
                            <fontawesomeIcon icon = {fa-coffee} size= "4x"
                            className="fa-bold text-success"/>
                             </p> */}
{/* 
                            <div className="card-body">
                                <h3 className="py-3">ODI MATCHES</h3>
                                <p className="text-jus">Due to his consistent ODI performances, Dhoni overtook Ricky Ponting as number one in the ICC ODI Rankings for batsmen on 20 April 2006, becoming the fastest batsman to do so, in 42 innings. His reign lasted just a week as Adam Gilchrist's performance against Bangladesh moved him to the top spot.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className=" card text-center text-white p-3" style={bgc}> */}

                            {/* <p className="text-center">
                            <fontawesomeIcon icon = {fa-coffee} size= "4x"
                            className="fa-bold text-success"/>
                        </p> */}

                            {/* <div className="card-body">
                                <h3 className="py-3">WIN PERCENTAGE</h3>
                                <p className="text-jus">Former Indian and Chennai Super Kings's captain MS Dhoni has played the most number of matches 204 as a captain and has won 121 matches with a win percentage of 59.60. Under Dhoni's leadership, CSK has worn the crown four times (2010,2011, 2018 & 2021).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className=" card text-center text-white p-3" style={bgc}> */}

                            {/* <p className="text-center">
                            <fontawesomeIcon icon = {fa-coffee} size= "4x"
                            className="fa-bold text-success"/>
                        </p> */}
{/* 
                            <div className="card-body">
                                <h3 className="py-3">IPL TROPHIES</h3>
                                <p className="text-jus">Under Dhoni, Chennai Super Kings have won the IPL trophy four times - in 2010, 2011, 2018 and 2021.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>)
}
export default Services;