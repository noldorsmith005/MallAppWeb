import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "/logo.png";

const Header = ({ showHome, showUserHome }) => {
  var [is_open, setPopup] = useState(false);

  const userHome = () => {
    setPopup(is_open = false);
    showUserHome();
  };

  return (
    <div>
      <header className="head_container">
        <img src={ logo } className="logo" onClick={ showHome }/>
        <h1 className="title"> 
          The Mall UD
        </h1>
        <div className='spacer'></div>
        <FaUserCircle className='navbutton' onClick={() => setPopup(is_open = !is_open)} />
      </header>
      {is_open && (
        <div className='popupoverlay'>
          <div className='popupcontent'>
            <h2> {"{Username}"} </h2>
            <h2 className='option' onClick={ userHome }> My Account </h2>
            <h2 className='option' onClick={() => {console.log("Signed out")}}> Sign Out </h2>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Header
