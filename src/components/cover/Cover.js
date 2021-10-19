import React from 'react'
import "./cover.css";
import Typewriter from 'typewriter-effect';


export const Cover = () => {
    return (
        <div className="cover-container">

            {/* <video className="video" src={coverVideo} autoPlay loop muted />ç */}
            <h1 className="animate__animated animate__heartBeat">Hola! Soy Facundo</h1>
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
            <section class="buttons">
                <a href="mailto:facundolobo2@gmail.com" class="fa fa-envelope"></a>
                <a href="https://www.linkedin.com/in/facundo-fabian-lobo"  rel="noreferrer" class="fa fa-linkedin"></a>
            </section>
        </div>
    )
}
