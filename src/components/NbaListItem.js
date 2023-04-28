import React from "react";

function NbaListItem({ team }) {
  console.log(team);

  return (
    <div>
      <h2>
        <img width={40} height={40} src={team.team.logo}></img> {team.team.name}{" "}
        {team.win.total}-{team.loss.total}
      </h2>
    </div>
  );
}
export default NbaListItem;
