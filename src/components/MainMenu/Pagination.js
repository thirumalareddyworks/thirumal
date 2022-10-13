import  { React, useState, useEffect } from "react";
import axios from 'axios';
import Pager from "./Pager";
const apiurl =`https://jsonplaceholder.typicode.com/posts`



export default (props) => {

    //Posts update for API
    var [posts, setStatePosts] = useState([]);

    //Select Default Max_posts per Action
    var [DefaultMaxDisplayposts] = useState(8);

    //First Button Number
    var [DefaultButton,SetStateDefaultButton] = useState(1);
    
    //Last Index Number
    var lastindex=DefaultButton * DefaultMaxDisplayposts //1*8->8
    var FirstIndex=lastindex - DefaultMaxDisplayposts //8-8=0


    // API CALLS by HOOKS
    useEffect(()=>
    {
        axios.get(apiurl).then((result)=> setStatePosts(result.data))
    
    },[])

    //var DisplayDefaultButtonPosts = posts.slice(FirstIndex,lastindex)//8

     //Total_posts from API
     var totalPosts = posts.length


    
     let handleButtonNumberChanges = (btnNumber)=>
     {
         SetStateDefaultButton(btnNumber)
     }

    return (<>
                 <div className="container py-1">

                <h5>Showing {FirstIndex + 1} - {lastindex} of {totalPosts} results for "Posts"</h5>

                  <br /><br />

                   <Pager  
                           totalpostsInAPI={totalPosts}  
                           maxDisplayrecordsPerButton={DefaultMaxDisplayposts} 
                           getButtonNumber={ (bno) => handleButtonNumberChanges(bno) } />

                 <br /><br />

                {
                    posts.slice(FirstIndex,lastindex).map((res, i) => {
                          return( <ul key={ i } >

                             <li>
                                <h4>{res.id}.{res.title}</h4>
                                <p>{res.body}</p>
                             </li>

                          </ul>) 
                    })
                 }

                </div>
                 
               

                 
    </>)
}
// const my={props}=>
// {

// }