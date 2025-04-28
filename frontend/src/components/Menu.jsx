import React from "react";

const Menu = ({ showEvents, showServices, showAbout }) => {
  return (
    <div className="menu">
      <ul>
        <button className="menubtn" onClick={ showEvents }> Events </button>
        <button className="menubtn" onClick={ showServices }> Services </button>
        <button className="menubtn"> Offices </button>
        <button className="menubtn"> Polls </button>
        <button className="menubtn"> Information </button>
        <button className="menubtn" onClick={ showAbout }> About </button>
      </ul>
    </div>
  )
}

export default Menu
