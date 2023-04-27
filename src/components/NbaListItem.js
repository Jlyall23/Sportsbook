import React from "react";

function NbaListItem({team}){
   
console.log(team)
 //team.sort((a,b)=>a.team.conference.rank - b.team.conference.rank)
const teamRanking= team.conference.rank

return(
    
    <div>
        
    <h2>{teamRanking}  {team.team.name} {team.win.total}-{team.loss.total} </h2>
    
    
</div>
)
}
export default NbaListItem