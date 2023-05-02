import React from "react";

function NflStandingsItem({team}){
   

return(
    
    <div>
      
    <h1> <img height={50} src={team.team.logo}></img> {team.team.name} {team.won}-{team.lost} </h1>
    
    
</div>
)
}
export default NflStandingsItem