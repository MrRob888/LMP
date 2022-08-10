import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css'
function Home() {
    return <div className='home'>
        <div className='about'> <h2> Founder and CEO</h2></div>
        <div className='prompt'>
            <p>
                jhfkjdshfoislkjlkdoiuoinmwnhutibhslajhakj fhkjdslhfus fwhihkjsal.
            </p>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <EmailIcon />
        </div>
        <div className='skills'>
            <h1>Services We Offer</h1>
            <ol className='list'>
                <li className='item'><h2>Loans</h2></li>
                <span>ghjgghjghjghjghj</span>
                <li className='item'><h2>Mortguages</h2></li>
                <span>hjlkjlkjloi</span>
                <li className='item'><h2>Super</h2></li>
                <span>kljkljlk</span>
            </ol>

        </div>
    </div>
}

export default Home