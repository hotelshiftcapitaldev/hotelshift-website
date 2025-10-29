import { useEffect, useState } from 'react'

// ASSETS
import hotelBlue1Large from '../assets/background/hotel-blue-1-large.jpg'

// COMPONENTS
import BGImage from './BGImage'


const Hero = () => {
    const [bgImage, setBgImage] = useState(hotelBlue1Large)

    return (
        <section id='hero'>
            <BGImage bgImage={bgImage} />
            <div className='hero-content maxw-1200'>
                <h1>From Transient Stays to <span className='text-yellow-500'>Thriving Communities</span></h1>
                <p>We transform underutilized hotels into vibrant apartment ecosystems, fostering a win-win for residents and investors.</p>
                <a className='cta-btn'>Contact Us</a>
            </div>
            
        </section>
    )
}

export default Hero