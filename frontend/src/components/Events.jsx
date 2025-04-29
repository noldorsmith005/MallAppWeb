import React from 'react'
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CgBell } from "react-icons/cg";
import icon from "/UDIcon.png";


const Events = () => {
  var [is_open, setPopup] = useState(false);
  var [selected, setSelected] = useState('events');

  const handleDropdown = (e) => {
    setSelected(e.target.value);
  };

  const [query, setQuery] = useState('');

  return (
    <div className='mainpage'>
      <div className='buttonrow'>
        <input
          className='search'
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className='spacer'></div>
        <select className='toggle' value={selected} onChange={handleDropdown}>
          <option value="events"> Events </option>
          <option value="athletics"> Athletics </option>
        </select>
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
      <div className='displayview'>
        <div className='itembox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Event One </p>
          </div>
          <p className='itemdate'> Time: 1200-1400 </p>
          <p className='itemdes'> This is a test description for the event page of the Mall UD website. Testing for overflow and other stuff to make sure everything is in order. The time should be scrolled under...ok cool we're good. </p>
        </div>
        <div className='itembox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Event Two </p>
          </div>
        </div>
        <div className='itembox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Event Three </p>
          </div>
        </div>
        <div className='itembox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Event Four </p>
          </div>
        </div>
        <div className='itembox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Event Five </p>
          </div>
        </div>
        <div className='itembox'>
          <div className='itemtitlerow'>
            <img className='itemicon' src={ icon }/>
            <p className='itemtitle'> Event Six </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
