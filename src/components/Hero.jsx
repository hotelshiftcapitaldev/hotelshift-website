import { useEffect, useState } from 'react'

// ASSETS
import hotelBlue1Large from '../assets/background/hotel-blue-1-large.jpg'

// COMPONENTS
import BGImage from './BGImage'


const Hero = () => {
    const [bgImage, setBgImage] = useState(hotelBlue1Large)

    return (
        <section id='hero'>
            <BGImage bgImage={bgImage} fetchPriority='high' loading='eager' />
            <div className='hero-content maxw-1500'>
                <h1>Hotel To Apartment Conversions</h1>
                <p className='text-yellow-500'>Nationwide Opportunities</p>
                <a className='cta-btn btn-yellow'>Contact Us</a>
            </div>
            
        </section>
    )
}

export default Hero