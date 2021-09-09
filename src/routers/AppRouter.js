import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from "../components/about/About";
// import { Contact } from "../components/contact/Contact";
import { Cover } from "../components/cover/Cover";
import { Footer } from '../components/footer/Footer';
import { Header } from "../components/header/Header";
import { Info } from '../components/info/Info';
import { Navbar } from "../components/navbar/Navbar";
// import { Projects } from "../components/proyect/Projects";
import { Skills } from "../components/skills/Skills";
import {Slider} from "../components/slider/Slider"



export const AppRouter = () => {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=>{
    const position = window.pageYOffset; //posocion en Y
    setScrollHeight(position)
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll); //cada vez q cambien el scroll se activa la funcion handleScroll
  },[scrollHeight])


  return (

    
    <Router>
      <div>
        {/* //barra de herramientas */}
        
        <Navbar isScrollHeight= {scrollHeight}/>
        {/* <Header/> */}

        {/* video   */}
        <Cover/>

        {/* about */}
        <About/>
        
        <Slider/>
        <Skills/>

        <Info/>
        <Footer/>

        {/* Skills */}
        {/* <Skills/> */}

       

        {/* proyect */}
        {/* <Projects/> */}
        
         {/* Contact */}
        {/* <Contact/> */}
        

      </div>
    </Router>
  );
}