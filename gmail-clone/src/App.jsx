import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Leftsidebar from './components/Leftsidebar'
import './App.css'
 
const App = () => {

  const[openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer= () => {
    setOpenDrawer(!openDrawer);
  }


  return (
    <>
      <Navbar toggleDrawer ={toggleDrawer}/>
      <Leftsidebar openDrawer={openDrawer} />
    </>
  );
};

export default App;
