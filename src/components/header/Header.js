import React, { useState } from 'react'
import Typical from 'react-typical'
import './header.css';
export const Header = () => {

  return (

        <div>
             

          <header>
            <div id="homeFullScreen">
              <div class="header-text">
              
                <span className="iconify header-icon" data-icon="ic:sharp-developer-mode" data-inline="false"></span>
                <h1> Facundo Lobo</h1>
                <h2>
                  <Typical
                    steps={['> Desarrollador Front-End', 2500, '> Desarrollador Back-End', 2500 ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </h2>

                <div class="vertical-line"></div>
                

              </div>
            </div>
          </header>
        </div>
       
  )
}
