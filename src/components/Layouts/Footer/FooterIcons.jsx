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
        {icon: <FaTelegramPlane />, key:'telegram'},
        {icon: <FaLinkedinIn />, key:'linkedIn'},
        {icon: <FaInstagram />, key:'instagram'}, 
        {icon: <FaWhatsapp />, key:'whatsUp'}, 
        {icon: <BiLogoGmail />, key:'gmail'}
    ]
    return (
        <div className="middle">
            {icons.map( item => <div className="btn" key={item.key}>{item.icon}</div>)}
        </div>
    )
}
