import React from "react";
import logo from "/logo.png";

const Header = () => {
  return (
    <div>
      <header className="head_container">
        <img src={ logo } className="logo"/>
        <h1 className="title"> 
          The Mall UD
        </h1>
      </header>
    </div>
  )
}

export default Header
