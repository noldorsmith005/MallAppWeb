import React from "react";

const Menu = ({ showH, showComps, showCont }) => {
  return (
    <div className="menu">
      <ul>
        <button className="menubtn" onClick={ showH }> Events </button>
        <button className="menubtn" onClick={ showComps }> Services </button>
        <button className="menubtn"> Offices </button>
        <button className="menubtn"> Polls </button>
        <button className="menubtn"> Information </button>
        <button className="menubtn" onClick={ showCont }> About </button>
      </ul>
    </div>
  )
}

export default Menu
