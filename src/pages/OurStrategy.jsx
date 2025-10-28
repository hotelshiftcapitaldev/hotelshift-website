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
                        <h2>1. Acquire <span className='text-yellow-500'>Strategically.</span></h2>
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
                        <h2>2. Transform with <span className='text-yellow-500'>Purpose.</span></h2>
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
                        <h2>3. Stabilize and <span className='text-yellow-500'>Refinance.</span></h2>
                        <p>Once properties achieve at least 90% occupancy, we secure multifamily appraisals and refinance at market valuation. This process enables us to return capital to investors, improve portfolio performance, and sustain cash flow while retaining long-term ownership upside.</p>
                    </div>
                </div>
            </section>

            <section className='bg-blue-100'>
                <div className='maxw-1200'>
                    <h2>Investment Philosophy: <span className='text-yellow-500'>Delivering True Alpha</span></h2>
                    <p>Our team takes the <strong>Efficient Market Hypothesis</strong> seriously. We recognize that most fund managers fail to consistently outperform the S&P 500. However, through strategic acquisitions, adaptive reuse expertise, and operational execution, <strong>HotelShift is designed to capture inefficiencies</strong> in niche real estate markets — generating true alpha through value creation, not speculation.</p>
                    <p>We believe impact-driven investing can outperform traditional benchmarks, delivering both financial returns and meaningful community outcomes.</p>
                </div>
            </section>
        </>
    )
}

export default OurStrategy