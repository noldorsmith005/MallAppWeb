import React from 'react'
import { useState } from "react";
import { CgBell } from "react-icons/cg";
import icon from "/UDIcon.png";


const Events = () => {
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
      </div>
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
