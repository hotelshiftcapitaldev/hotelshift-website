import { useEffect, useState } from 'react'

// ASSETS
import hotelBlue3Large from '../assets/background/hotel-blue-3-large.jpg'

// COMPONENTS
import BGImage from './BGImage'


const Hero = (props) => {
    // define a default image if no image is passed as a prop
    const defaultImage = { bgImage: hotelBlue3Large }

    // merge defaultImage with any props passed in
    const bgImage = { ...defaultImage, ...props }

    return (
        <section id='hero2'>
            <BGImage bgImage={bgImage.bgImage} fetchPriority='high' loading='eager' />
            <div className='hero-content maxw-1500'>
                <h1>The HotelShift Strategy</h1>
            </div>
            
        </section>
    )
}

export default Hero