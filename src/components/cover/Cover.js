import React from 'react'
import "./cover.css";
import coverVideo from "../../media/coverVideo.mp4"
import Typewriter from 'typewriter-effect';


export const Cover = () => {
    return (
        <div className="cover-container">

            <video className="video" src={coverVideo} autoPlay loop muted />ç
            <h1 className="animate__animated animate__heartBeat">Hola! Soy Facundo</h1>
            <p>
                <Typewriter
                    options={{
                        strings: ['<strong>Desarrollador <span style="color: #27ae60;">Backend</span></strong>', '<strong>Desarrollador <span style="color: #27ae60;">Frontend</span></strong>', '<strong>Ingeniería en <span style="color: #e67e22;">Informática</span></strong>'],
                        autoStart: true,
                        loop: true,
                    }}
                />            
            </p>  
        </div>
    )
}
