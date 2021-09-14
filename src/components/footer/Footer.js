import React from 'react'
import './footer.css'
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Facundo Lobo</h1>
                <p>Argentina Buenos Aires</p>
            </div>
            <div className="footer-contact">
                <h3>Contactame por mi LinkedIn</h3>
                <p></p>
            </div>
            <div className="footer-sns">
                <div className="design-by">Design By FL</div>
                <div className="sns-links">
                <a href="https://www.linkedin.com/in/facundo-fabian-lobo/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook facebook"></i>
                </a> */}
                </div>
            </div>
    </footer>
    )
}
