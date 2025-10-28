import { useEffect, useState } from 'react'

// ASSETS
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue3Large from '../assets/background/hotel-blue-3-large.jpg'


const Hero = () => {
    const [bgImage, setBgImage] = useState(hotelBlue3Large)

    return (
        <section 
            id='hero' 
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='hero-content maxw-1200'>
                <h1>The <span className='text-yellow'>HotelShift</span> Strategy</h1>
                <p>Get returns that consistently exceed common stock & real estate benchmarks.</p>
                <a className='cta-btn'>Contact Us</a>
            </div>
            
        </section>
    )
}

export default Hero