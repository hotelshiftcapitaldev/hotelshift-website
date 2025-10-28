// ASSETS
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue2Small from '../assets/background/hotel-blue-2-small.jpg'
import hotelBlue3Small from '../assets/background/hotel-blue-3-small.jpg'

// PAGES
import Hero2 from '../components/Hero2'


const OurStrategy = () => {


    return (
        <>
            <Hero2 />
            
            <section>
                <div className='two-col two-col-start maxw-1200'>
                    <img 
                        src={`${hotelBlue2Small}`} 
                        alt='Image of a hotel' />
                    <div className='y-center'>
                        <h2>1. Acquire <span className='text-yellow'>Strategically.</span></h2>
                        <p>We identify and purchase extended-stay and distressed hotels in high-traffic, high-growth metros — targeting properties with large rooms, strong redevelopment potential, and below-market pricing. Our acquisition strategy focuses on unlocking value others overlook through adaptive reuse and disciplined underwriting.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='two-col two-col-end maxw-1200'>
                    <img 
                        src={`${hotelBlue2Small}`} 
                        alt='Image of a hotel' />
                    <div className='y-center'>
                        <h2>2. Transform with <span className='text-yellow'>Purpose.</span></h2>
                        <p>Through adaptive reuse, we renovate these assets into modern workforce housing — efficient, comfortable, and community-centered. Every conversion is guided by design, operational, and sustainability principles that enhance long-term value for both residents and investors.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='two-col two-col-start maxw-1200'>
                    <img 
                        src={`${hotelBlue2Small}`} 
                        alt='Image of a hotel' />
                    <div className='y-center'>
                        <h2>3. Stabilize and <span className='text-yellow'>Refinance.</span></h2>
                        <p>Once properties achieve at least 90% occupancy, we secure multifamily appraisals and refinance at market valuation. This process enables us to return capital to investors, improve portfolio performance, and sustain cash flow while retaining long-term ownership upside.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStrategy