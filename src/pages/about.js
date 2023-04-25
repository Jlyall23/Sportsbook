import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
let navigate = useNavigate()
    return(
        <div>
           <h1 id="aboutHeader">What is Lyall's Sports Network?</h1>
           <p id="aboutIntro">Lyall's Sports Network is the one stop shop for the scores from all of your favorite sports leagues! This is a new website and we will be implementing a ton of new features over the next few weeks. Keep checking in to see all of the new improvements!  </p>

      
        </div>
    )
}
export default About