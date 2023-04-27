import React from "react";
import { useNavigate } from "react-router-dom";

function NFL(){
let navigate = useNavigate()
    return(
        
        <div id='NFL-Background'>

            
             <span>NFL</span>
             <button id="NFLstandingsbtn"
            onClick={() => {
                navigate('/NFLstandings')
            }}
            > 
                Standings </button>
                
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
            
      
        
    )
}
export default NFL