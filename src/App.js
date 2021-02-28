import React, { useState, useEffect } from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import {Hero} from "./components/Hero";
import { About } from './components/About';
import { MyProjects} from './components/MyProjects'
import { Contact } from './components/Contact'



function App() {
  return (
    <>
    <title>Myles Lam Portfolio</title>
    <Navbar />
    <Hero />
    <About />
    <MyProjects />
    <Contact />

    </>
  );
}

export default App;
