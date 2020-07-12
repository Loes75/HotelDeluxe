import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="contact">
                <h3>Contáctanos - Síguenos </h3>
                <a href="#footer" className="contact-link"><FaFacebookSquare/></a>
                <a href="#footer" className="contact-link"><FaInstagramSquare/></a>
                <a href="#footer" className="contact-link"><FaPaperPlane/></a>
            </div>
        </footer>
    )
}
