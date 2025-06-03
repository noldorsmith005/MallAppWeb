import React from "react";
import { useState } from "react";
import icon from "/UDIcon.png";


const Services = () => {

  return (
    <div className="mainpage">
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
