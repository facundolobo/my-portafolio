import React from 'react'
import "./cover.css";
import Typewriter from 'typewriter-effect';


export const Cover = () => {
    return (
        <div className="cover-container">

            {/* <video className="video" src={coverVideo} autoPlay loop muted />ç */}
            <h1 className="animate__animated animate__heartBeat">Hola! Soy Facundo v3</h1>
            <p>
                <Typewriter
                    options={{
                        strings: ['<strong>Desarrollador <span style="color: #e84118;">Backend</span></strong>'],
                        autoStart: true,
                        loop: true,
                    }}
                /> 
                <Typewriter
                    options={{
                        strings: ['<strong>Desarrollador <span style="color: #8c7ae6;">Frontend</span></strong>'],
                        autoStart: true,
                        loop: true,
                    }}
                />    
                <Typewriter
                    options={{
                        strings: ['<strong>Ingeniería en <span style="color: #0097e6;">Informática</span></strong>'],
                        autoStart: true,
                        loop: true,
                    }}
                />         
            </p>  
            <div class="buttons">
                <a href="mailto:facundolobo2@gmail.com" id="1" aria-hidden="true" class="fa fa-envelope"> </a>
                <a href="https://www.linkedin.com/in/facundo-fabian-lobo"  rel="noreferrer" target="_blank" aria-hidden="true" id="2" class="fa fa-linkedin"> </a>
            </div>
        </div>
    )
}
