import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'
function Footer() {
    return (
    <div className='footer'>
        <div className='socialMedia'> 
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2022 LukePrice.com</p>
    </div>
)}

export default Footer;