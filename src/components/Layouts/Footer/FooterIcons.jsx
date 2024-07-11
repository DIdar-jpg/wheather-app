import React from 'react'

import './FooterIcons.css'
import { 
    FaTelegramPlane , 
    FaLinkedinIn, 
    FaInstagram, 
    FaWhatsapp, 
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export default function FooterIcons() {
    const icons = [
        <FaTelegramPlane />,
        <FaLinkedinIn />,
        <FaInstagram />, 
        <FaWhatsapp />, 
        <BiLogoGmail />
    ]
    return (
    <div class="middle">
        {icons.map( icon => <div class="btn">{icon}</div>)}
    </div>
    )
}
