import React from 'react'
import './navbar.css'

export const Navbar = ({isScrollHeight}) => {

    // funcion para ir al top de pagina 
    const toTheTop = ()=>{
        window.scroll({top:0 ,left: 0, behavior: "smooth"})
    }

    function show() {
        alert("You clicked on the button, so it triggered the alert box");
    }
    return (

        <nav className = {`navbar ${isScrollHeight > 20 ? "scrolling" : null}`}> 
         {/* <div className="navbar-logo" onClick = {toTheTop}> */}
         <div className="navbar-logo" onclick="show()">
            <a href="http://www.linkedin.com/in/facundo-fabian-lobo" target="_blank" > Facundo Lobo
            <div className="container-in">
                <span className="fab fa-linkedin"></span>

                    <div className="line"> 

                        <div className="inner">

                        </div>
                    </div>
            </div>

            </a>

          
         </div>
        </nav>
    )
}
