import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Compositions from "./components/Compositions";
import Arrangements from "./components/Arrangements";
import Purchase from "./components/Purchase";
import Bio from "./components/Bio";
import Contact from "./components/Contact";


const App = () => {
  
  var [show_events, setShowEvents] = useState(true);
  var [show_comps, setShowComps] = useState(false);
  var [show_arrs, setShowArrs] = useState(false);
  var [show_purch, setShowPurch] = useState(false);
  var [show_bio, setShowBio] = useState(false);
  var [show_contact, setShowContact] = useState(false);


  const showEvents = () => {
    setShowEvents(show_events = true);
    setShowComps(show_comps = false);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowContact(show_contact = false);
  }
  
  const showCompositions = () => {
    setShowEvents(show_events = false);
    setShowComps(show_comps = true);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowContact(show_contact = false);
  }

  const showContact = () => {
    setShowEvents(show_events = false);
    setShowComps(show_comps = false);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowContact(show_contact = true);
  }



  return (
    <div>
      <Header />
      <div>
        <Menu 
          showH={ () => showEvents() }
          showComps={ () => showCompositions() }
          showCont={ () => showContact() }
         /> 
        {show_events && <Events /> }
        {show_comps && <Compositions /> }
        {show_arrs && <Arrangements /> }
        {show_purch && <Purchase /> }
        {show_bio && <Bio /> }
        {show_contact && <Contact /> }
      </div>
    </div>
  );
}

export default App
