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
        {
            icon: <FaTelegramPlane />,
            key:'telegram',
            url: process.env.REACT_APP_TELEGRAM_URL
        },
        {
            icon: <FaLinkedinIn />,
            key:'linkedIn',
            url: process.env.REACT_APP_LINKEDIN_URL
        },
        {
            icon: <FaInstagram />,
            key:'instagram',
            url: process.env.REACT_APP_INSTAGRAM_URL
        }, 
        {
            icon: <FaWhatsapp />, 
            key:'whatsUp',
            url: process.env.REACT_APP_WHATSAPP_URL
        }, 
        {
            icon: <BiLogoGmail />,
            key:'gmail',
            url: process.env.REACT_APP_GMAIL_URL
        }
    ]
    return (
        <div className="middle">
            {icons.map( item => <a href={item.url} className="btn" key={item.key}>{item.icon}</a>)}
        </div>
    )
}
