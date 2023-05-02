import { useEffect } from "react";
import React from "react";
import nbaLive from "../../apis/NBA/NBA-live";
import { useState } from "react"
import NbaListItem from "../../components/NbaListItem";
import { useNavigate } from "react-router-dom";




function NBAStandings(){
  let navigate = useNavigate()
  const [eastern, setEastern] = useState(null)
  const [western, setWestern] = useState(null)
  useEffect(()=> {
    nbaLive().then((res)=>{
      console.log(res)
      const sortedTeam = res.sort((a,b)=>a.conference.rank - b.conference.rank)
      setEastern(sortedTeam.filter(team => team.conference.name === 'east'))
      setWestern(sortedTeam.filter(team => team.conference.name === 'west'))
      })
   },[])

    return(
      <div id="NBA-Background">


   
      
      <ul id="Eastern">
        <h1>Eastern Conference</h1>
        {eastern? eastern.map(team =>(
          <NbaListItem team={team} />
          
        )):<h1>Loading...</h1>}
      </ul>
      
      <ul id="Western">
          <h1>Western Conference</h1>
          {western? western.map(team =>(
          <NbaListItem team={team} />
          
          )):<h1>Loading...</h1>}
      </ul>
   
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

        
    )
}
export default NBAStandings

