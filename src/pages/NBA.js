import React from "react";
import { useNavigate } from "react-router-dom";

function NBA(){
let navigate = useNavigate()
    return(
        <div>
          <span id="NBA-Header">NBA Scores</span>

          <button id='NBA-Scores'>NBA Scores</button>

          <button id='NBA-Stats'>NBA Stats</button>
      
        </div>
    )
}
export default NBA