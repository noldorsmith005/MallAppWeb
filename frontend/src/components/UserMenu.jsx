import React from "react";

const UserMenu = ({ showEvents, showServices, showAbout }) => {
  return (
    <div className="usermenu">
      <ul>
        <button className="menubtn" onClick={ showEvents }> Account Information </button>
        <button className="menubtn" onClick={ showServices }> Notifications </button>
        <button className="menubtn"> Event Creation & Approval </button>
        <button className="menubtn"> Hosts & Managers </button>
      </ul>
    </div>
  )
}

export default UserMenu