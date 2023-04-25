import React from "react";
import { useNavigate } from "react-router-dom";



function MLB(){
let navigate = useNavigate()
    return(
        <div>
           <span id='MLB-Header'>MLB</span> 
           
           <button id="MLB-Standings">MLB Standings</button>
           
           <button id="MLB-Scores">MLB Scores</button>
           
           <button id="MLB-Stats">MLB Stats</button>

      
        </div>
    )
}
export default MLB