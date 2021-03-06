import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router
} from "react-router-dom";
import { About } from "../components/about/About";
// import { Contact } from "../components/contact/Contact";
import { Cover } from "../components/cover/Cover";
import { Footer } from '../components/footer/Footer';
import { Info } from '../components/info/Info';
// import { Projects } from "../components/proyect/Projects";
import { Skills } from "../components/skills/Skills";
// import {Slider} from "../components/slider/Slider"



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
        
        {/* <Navbar isScrollHeight= {scrollHeight}/> */}
        {/* <Header/> */}

        {/* video   */}
        <Cover/>

        {/* about */}
        <About/>
        
        {/* <Slider/> */}

        <Info/>
        <Footer/>
        <Skills/>

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