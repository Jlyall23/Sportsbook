import React from "react"
import { useEffect , useState } from "react"
import MlbStandingsItem from "../../components/MlbStandingsItem"
import MLBstandings from "../../apis/MLB/MLB-standings"

function MLBStandings(){
    const [al, setAL] = useState(null)
    const [nl, setNL] = useState(null)
    useEffect(()=> {
      MLBstandings().then((res)=>{
        console.log(res)
        const sortedTeamMLB = res.sort((a,b)=>b.won - a.won)
        setAL(sortedTeamMLB.filter(team => team.group.name === 'American League'))
        setNL(sortedTeamMLB.filter(team => team.group.name === 'National League'))
        })
     },[])
    return(
        
        <div id="MLBSTANDINGS">
            MLB STANDINGS
            <ul id="AL">
        <h1>AL</h1>
        {al? al.map(team =>(
          <MlbStandingsItem team={team} />
          
        )):<h1>Loading...</h1>}
      </ul>
      
      <ul id="NL">
          <h1>NL</h1>
          {nl? nl.map(team =>(
          <MlbStandingsItem  team={team} />
          
          )):<h1>Loading...</h1>}
      </ul>
        </div>
            
      
        
    )
}
export default MLBStandings