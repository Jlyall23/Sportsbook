import React from "react";
import { useNavigate } from "react-router-dom";

function NFL(){
let navigate = useNavigate()
    return(
        
        <div id='NFL-Background'>
             <span>NFL</span>
             <button id='NFL-Standings'>NFL Standings</button>
            
      
        </div>
    )
}
export default NFL