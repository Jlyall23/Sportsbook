import React from "react";

function MlbStandingsItem({team}){
   

return(
    
    <div>
      
    <h1>  {team.team.name} {team.games.win}-{team.games.lose} </h1>
    
    
</div>
)
}
export default MlbStandingsItem