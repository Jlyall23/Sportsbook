import React from "react";

function NflStandingsItem({team}){
   

return(
    
    <div>
        
    <h2> {team.team.name} {team.won}-{team.lost} </h2>
    
    
</div>
)
}
export default NflStandingsItem