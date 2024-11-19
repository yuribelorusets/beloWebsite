import React, { Component } from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaRegCopyright, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <footer class='footer'>
                <div class='container'>
                    <div class='footer-item' id='phone-container'>
                        <div class='icon-container'><FiPhoneCall class='icon'/></div>
                        (510) 332 - 9501
                    </div>
                    <div class='footer-item' id='email-container'>
                        <div class='icon-container'><FiMail class='icon'/></div>
                        jutamuliaivan@gmail.com
                    </div>
                    <div class='footer-item' id='social-media-container'>
                        <div class='icon-container' onClick={()=> window.open("http://github.com/ivanjut")}>
                            <FaGithub class='icon' id='github-icon'/>
                        </div>
                        <div class='icon-container' onClick={()=> window.open("http://www.linkedin.com/in/ivan-jutamulia-2bb610143/")}>
                            <FaLinkedin class='icon' id='linkedin-icon'/>
                        </div>
                        <div class='icon-container' onClick={()=> window.open("http://www.facebook.com/ivan.jutamulia")}>
                            <FaFacebook class='icon' id='facebook-icon'/>
                        </div>
                        <div class='icon-container' onClick={()=> window.open("http://www.instagram.com/ivanjutamulia/")}>
                            <FaInstagram class='icon' id='instagram-icon'/>
                        </div>
                    </div>
                    <div class='footer-item' id='copyright-container'>
                        <div class='copyright-container'><FaRegCopyright/></div>
                        Ivan Jutamulia.
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;