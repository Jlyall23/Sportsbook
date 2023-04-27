import React from "react";

function NbaStatItem({element}){
    console.log(element)
    
    return(
        <div>
            <h2>{element.player.firstname} {element.player.lastname}</h2>
            <h3>{element.points}</h3>
        </div>
    )
}
export default NbaStatItem