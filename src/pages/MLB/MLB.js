import React from "react";
import { useNavigate } from "react-router-dom";



function MLB(){
let navigate = useNavigate()
    return(
        <div>
           <span id='MLB-Header'>MLB</span> 
           
           <button id="MLBstandingsbtn"
            onClick={() => {
                navigate('/MLBStandings')
            }}
            > 
                Standings </button>
           
        

      
        </div>
    )
}
export default MLB