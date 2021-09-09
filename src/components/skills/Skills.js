import React from 'react'
import './skills.css';
import mongodb from "../../media/skills/mongodb.jpg"
import express from "../../media/skills/express.jpg"
import nodejs from "../../media/skills/nodejs.jpg"
import reactjs from "../../media/skills/reactjs.jpg"
import redux from "../../media/skills/redux.jpg"
import javascript from "../../media/skills/javascript.jpg"
import css from "../../media/skills/css.jpg"
import html from "../../media/skills/html.jpg"
import selenium from "../../media/skills/selenium.png"


export const Skills = () => {

    return (
        <div className="skills-container">
                    <h1 class="title">Habilidades</h1>
        <div class="container">

            <div class="card">
    
                <img src={mongodb}/>
                <p>⭐⭐⭐⭐⚫</p>
                    
            </div>
            
            <div class="card">
    
                <img src={express} />
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            
    
            <div class="card">
    
                <img src={reactjs}/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={nodejs}/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={redux}/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={javascript}/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
            <div class="card">
    
                <img src={selenium}/>
                <p>⭐⭐⭐⚫⚫</p>
            </div>
            {/* <div class="card">
    
                <img src={css}/>
                <p>⭐⭐⭐⚫⚫</p>
            </div> */}
            <div class="card">
    
                <img src={html}/>
                <p>⭐⭐⭐⭐⚫</p>
            </div>
        </div>
        </div>    
    )
}

