import React from "react";
import "./slider.css";
import cotizar from '../../media/proyect/cotizar.jpg'
import materialDidactico from '../../media/proyect/material-didactico.png'
import materias from '../../media/proyect/materias.png'
import simulador from '../../media/proyect/simulador.png'
import portafolio from '../../media/proyect/portafolio.jpg'



const slidesInfo = [
    {
      src:cotizar,
      alt: "Project 1",
      desc: "App Consola Cotizar",
      dir:'https://github.com/facundolobo/App-cotizacion'
    },
    {
      src:materias,
      alt: "Project 2",
      desc: "App Consola Materias",
      dir:'https://github.com/facundolobo/App-Materias'
    },
    {
      src:materialDidactico,
      alt: "Project 3",
      desc: "App Web Materiales Didacticos",
      dir:'https://material-didactico.herokuapp.com'
    },
    {
      src:simulador,
      alt: "Project 4",
      desc: "App Andoid Simulador Proceso",
      dir:'https://github.com/facundolobo/SimuladorDePlanificacionDeProceso'
    },
    {
      src:portafolio,
      alt: "Project 5",
      desc: "App Web Protafolio",
      dir:'https://github.com/facundolobo/SimuladorDePlanificacionDeProceso'
    }
  ];

export const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc" >
      <span><a href={slide.dir} target="_blank" rel="noreferrer">{slide.desc}</a></span>
        {/* <span>{slide.desc}</span> */}
      </div>
    </div>
  ));
  
  // export default slides;