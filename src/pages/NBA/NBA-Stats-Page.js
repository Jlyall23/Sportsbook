import { useEffect } from "react";
import React from "react";
import nbaStatisticsAPI from "../../apis/NBA/NBA-stats";
import { useState } from "react"
import NbaStatItem from "../../components/NbaStatItem";



function NbaStats(){
  const [stats, setStats] = useState(null)
 
  useEffect(()=> {
    nbaStatisticsAPI().then((res)=>{
      console.log(res)
     setStats(res.filter(element => element.player))
      })
   },[])

    return(
<div>
      <ul id="NBASTATS">
        <h1>Player Stats</h1>
        {stats? stats.map(element =>(
          <NbaStatItem player={element} />
        
        )):<h1>Loading...</h1>}
      </ul>

</div>
)
}
export default NbaStats
