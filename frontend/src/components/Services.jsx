import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CgBell } from "react-icons/cg";
import icon from "/UDIcon.png";


const Services = () => {
  var [is_open, setPopup] = useState(false);

  return (
    <div className="mainpage">
      <div className='buttonrow'>
        <CgBell className='navbutton' size="2.3%" />
        <FaUserCircle className='navbutton' onClick={() => setPopup(is_open = !is_open)} size="4%" color='white'/>
      </div>
      {is_open && (
        <div className="popupoverlay">
          <div className="popupcontent">
            <h2> {"{Username}"} </h2>
            <h2> My Account </h2>
            <h2> Preferences </h2>
            <h2> Sign Out </h2>
          </div>
        </div>
      )}
      <div className="linktab">
        <h1 className="title"> Helpful Links </h1>
        <div className="linkdisplay">
          <a className="link" href="https://udallas.edu/" target="_blank" rel="noopener noreferrer"> University Home </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> Brightspace </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> example.com </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> example.com </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> example.com </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> example.com </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> example.com </a>
          <a className="link" href="https://udallas.brightspace.com/d2l/home" target="_blank" rel="noopener noreferrer"> example.com </a>
        </div>
      </div>
      <div className='serviceview'>
        <div className='servicebox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Bookstore </p>
          </div>
          <p className='itemhours'> Hours: 07:45 AM - 05:00 PM </p>
          <p className='itemdes'> The UD Bookstore is...example description </p>
        </div>
        <div className='servicebox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Clinic </p>
          </div>
        </div>
        <div className='servicebox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Gym </p>
          </div>
        </div>
        <div className='servicebox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Example </p>
          </div>
        </div>
        <div className='servicebox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Example </p>
          </div>
        </div>
        <div className='servicebox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Example </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
