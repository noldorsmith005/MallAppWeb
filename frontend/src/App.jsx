import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import UserMenu from "./components/UserMenu";
import Events from "./components/Events";
import Services from "./components/Services";
import Arrangements from "./components/Arrangements";
import Purchase from "./components/Purchase";
import Bio from "./components/Bio";
import About from "./components/About";
import UserHome from "./components/UserHome";


const App = () => {
  
  var [show_menu, setShowMenu] = useState(true);
  var [show_usermenu, setShowUserMenu] = useState(false);
  var [show_userhome, setShowUserHome] = useState(false);
  var [show_events, setShowEvents] = useState(true);
  var [show_services, setShowServices] = useState(false);
  var [show_arrs, setShowArrs] = useState(false);
  var [show_purch, setShowPurch] = useState(false);
  var [show_bio, setShowBio] = useState(false);
  var [show_about, setShowAbout] = useState(false);


  const showUserHome = () => {
    setShowMenu(show_menu = false);
    setShowUserMenu(show_menu = true);
    setShowUserHome(show_userhome = true);
    setShowEvents(show_events = false);
    setShowServices(show_services = false);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowAbout(show_about = false);
  }

  const showEvents = () => {
    setShowMenu(show_menu = true);
    setShowUserMenu(show_menu = false);
    setShowUserHome(show_userhome = false)
    setShowEvents(show_events = true);
    setShowServices(show_services = false);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowAbout(show_about = false);
  }
  
  const showServices = () => {
    setShowMenu(show_menu = true);
    setShowUserMenu(show_menu = false);
    setShowUserHome(show_userhome = false);
    setShowEvents(show_events = false);
    setShowServices(show_services = true);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowAbout(show_about = false);
  }

  const showAbout = () => {
    setShowMenu(show_menu = true); 
    setShowUserMenu(show_menu = false);
    setShowUserHome(show_userhome = false);
    setShowEvents(show_events = false);
    setShowServices(show_services = false);
    setShowArrs(show_arrs = false);
    setShowPurch(show_purch = false);
    setShowBio(show_bio = false);
    setShowAbout(show_about = true);
  }



  return (
    <div>
      {<Header
        showHome={ () => showEvents() }
        showUserHome={ () => showUserHome()}
       /> }
      <div>
        {show_menu && <Menu 
          showEvents={ () => showEvents() }
          showServices={ () => showServices() }
          showAbout={ () => showAbout() }
         /> }
        {show_usermenu && <UserMenu/> }
        {show_userhome && <UserHome/> }
        {show_events && <Events /> }
        {show_services && <Services /> }
        {show_arrs && <Arrangements /> }
        {show_purch && <Purchase /> }
        {show_bio && <Bio /> }
        {show_about && <About /> }
      </div>
    </div>
  );
}

export default App
