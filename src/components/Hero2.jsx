import { useEffect, useState } from 'react'

// ASSETS
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue3Large from '../assets/background/hotel-blue-3-large.jpg'


const Hero = () => {
    const [bgImage, setBgImage] = useState(hotelBlue3Large)

    return (
        <section 
            id='hero2' 
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='hero-content maxw-1200'>
                <h1>The HotelShift Strategy</h1>
                {/* <h1>The <span className='text-yellow-500'>HotelShift</span> Strategy</h1> */}
            </div>
            
        </section>
    )
}

export default Hero