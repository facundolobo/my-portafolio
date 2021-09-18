import React from 'react'
import './about.css';
import img from "../../media/about.jpg"

export const About = () => {
    return (
            <div className="about-container">
                <div className="about-desc">
                    <h3> Sobre mi</h3>
                    <p>

                    Me llamo Facundo Lobo, tengo 26 años y actualmente soy Alumno avanzado de Ingeniería en Informática en la Universidad Nacional de Catamarca.

                    Empecé en el mundo del desarrollo web hace dos años. Me apasiona la informática, la tecnología y la electrónica.

                    Me gusto el desarrollo de Backend como el Frontend.

                    Soy bastante autodidacta, busco siempre aprender nuevas cosas y mejorar los métodos de aprendizaje para poder transmitirlos</p>

                </div>
                <div className="about-img">
                    <img src={img} alt="" />
                </div>

            </div>
                
    )
}
