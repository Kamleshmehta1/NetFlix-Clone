import React from 'react'
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import logo from "./images/logo.png"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-info">
                <img src={logo} className="footer-logo" />
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/kamlesh-mehta-70b431130/" target="_blank" className="social-logo"><FaLinkedin /></a>
                <a href="https://github.com/Kamleshmehta1" target="_blank" className="social-logo" ><AiFillGithub /></a>
                <a href="" className="social-logo" ><AiOutlineMail /></a>
            </div>
            <p style={{ textAlign: "center" }}>Kamlesh Mehta</p>
        </div>
    )
}

export default Footer