import React from 'react'
import './about.css';
import img from "../../media/about.jpg"

export const About = () => {
    return (
            <div className="about-container">
                <div className="about-desc">
                    <h3> Sobre mi</h3>
                    <p>

                    Me llamo Facundo Lobo, tengo 29 años y Actualmente soy Desarrollador Backend y Trabajo en Censys S.A, creacion de Apis , manejos de la base de datos

                    Empecé en el mundo del desarrollo web hace 3 años. Me apasiona la informática, la tecnología y la electrónica.

                    Me gusto el desarrollo de Backend como las Bases de Datos.

                    Soy bastante autodidacta, busco siempre aprender nuevas cosas y mejorar los métodos de aprendizaje para poder transmitirlos</p>

                </div>
                <div className="about-img">
                    <img src={img} alt="" />
                </div>

            </div>
                
    )
}
