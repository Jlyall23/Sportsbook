import React from "react";
import NFLstandings from "../../apis/NFL/NFL-standings";
import { useState, useEffect } from "react";
import NflStandingsItem from "../../components/NflStandingsItem";


function NFLStandings(){
    const [nfc, setNFC] = useState(null)
    const [afc, setAFC] = useState(null)
    useEffect(()=> {
      NFLstandings().then((res)=>{
        console.log(res)
        const sortedTeamNFL = res.sort((a,b)=>b.won - a.won)
        setNFC(sortedTeamNFL.filter(team => team.conference === 'National Football Conference'))
        setAFC(sortedTeamNFL.filter(team => team.conference === 'American Football Conference'))
        })
     },[])
    return(
        
        <div id="NFLSTANDINGS">
            NFL STANDINGS
            <ul id="NFC">
        <h1>NFC</h1>
        {nfc? nfc.map(team =>(
          <NflStandingsItem team={team} />
          
        )):<h1>Loading...</h1>}
      </ul>
      
      <ul id="AFC">
          <h1>AFC</h1>
          {afc? afc.map(team =>(
          <NflStandingsItem  team={team} />
          
          )):<h1>Loading...</h1>}
      </ul>
        </div>
            
      
        
    )
}
export default NFLStandings