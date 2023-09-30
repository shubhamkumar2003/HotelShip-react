import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'
export default function Footer() {
    return (
        <div className='footer-main'>
            <div className="footer-left">
                <div className="footer-contact-heading">
                    <h2 className="contact-heading">Phone Support</h2>
                </div>
                <div className="footer-contact-number">
                    <h5 className="contact-number">+91 975XXXX6</h5>
                </div>
            </div>
            <div className="footer-right">
            <h1 className="footer-left-heading">Follow Us</h1>
            <div className='footer-icons'>
            <FaInstagram size={25} />
            <FaFacebook size={25} />
            <FaTwitter size={25} />
            <FaYoutube size={25} />
          </div>

            </div>
        </div>
    )
}
