import React from 'react'
import './skills.css';
import mongodb from "../../media/skills/mongodb.jpg"
import express from "../../media/skills/express.jpg"
import nodejs from "../../media/skills/nodejs.jpg"
import reactjs from "../../media/skills/reactjs.jpg"
import redux from "../../media/skills/redux.jpg"
import javascript from "../../media/skills/javascript.jpg"
import html from "../../media/skills/html.jpg"
import selenium from "../../media/skills/selenium.png"


export const Skills = () => {

    return (
        <div className="skills-container">
                    <h1 class="title">Habilidades</h1>
        <div class="container">

            <div class="card">
    
                <img src={mongodb} alt="1"/>
                <p>⭐⭐⭐⭐⚫</p>
                    
            </div>
            
            <div class="card">
    
                <img src={express} alt="2"/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            
    
            <div class="card">
    
                <img src={reactjs} alt="3"/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={nodejs} alt="4"/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={redux} alt="5"/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={javascript} alt="6"/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={selenium} alt="7"/>
                <p>⭐⭐⭐⚫⚫</p>
            </div>
            {/* <div class="card">
    
                <img src={css}/>
                <p>⭐⭐⭐⚫⚫</p>
            </div> */}
            <div class="card">
    
                <img src={html} alt="8"/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
        </div>
        </div>    
    )
}

