import { useEffect, useState } from 'react'

// ASSETS
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue1Large from '../assets/background/hotel-blue-1-large.jpg'


const Hero = () => {
    const [bgImage, setBgImage] = useState(hotelBlue1Large)

    // useEffect(() => {
    //     const updateBackgroundImage = () => {
    //         if(window.innerWidth < 600 || window.innerHeight < 390 ) {
    //             setBgImage(hotelBlue1Small)
    //         } else {
    //             setBgImage(hotelBlue1Large)
    //         }
    //     }

    //     // Run once on mount
    //     updateBackgroundImage()

    //     // Update on resize
    //     window.addEventListener('resize', updateBackgroundImage)
    //     return () => window.removeEventListener('resize', updateBackgroundImage)
    // }, [])

    return (
        <section 
            id='hero' 
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='hero-content maxw-1200'>
                <h1>From Transient Stays to <span className='text-yellow-500'>Thriving Communities</span></h1>
                <p>We transform underutilized hotels into vibrant apartment ecosystems, fostering a win-win for residents and investors.</p>
                <a className='cta-btn'>Contact Us</a>
            </div>
            
        </section>
    )
}

export default Hero