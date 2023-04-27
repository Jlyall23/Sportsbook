import React from "react";
import { useNavigate } from "react-router-dom";


function NBA() {
  let navigate = useNavigate();
  return (
    <div>
      <button id="NBA-Scores">NBA Scores</button>
      <button id="NBA-Stats">NBA Stats</button>

      <span></span>
      <button
        onClick={() => {
          navigate("/NBAStandings");
        }}
      >
       
      </button>
    </div>
  );
}
export default NBA;
