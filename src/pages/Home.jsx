import { Link } from 'react-router-dom'

// ASSETS
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue2Small from '../assets/background/hotel-blue-2-small.jpg'
import hotelBlue3Small from '../assets/background/hotel-blue-3-small.jpg'

// COMPONENTS
import Hero from '../components/Hero'


const Home = () => {


    return (
        <>
            <Hero />
            <section>
                <div className='two-col two-col-start maxw-1200'>
                    <img 
                        src={`${hotelBlue2Small}`} 
                        alt='Image of a hotel'
                        decoding='async'
                        fetchPriority='auto'
                        loading='lazy' />
                    <div className='col-content'>
                        <h2>We Renovate. <span className='text-yellow-500'>You Benefit.</span></h2>
                        <p>HotelShift Capital reimagines how real estate serves communities. By repurposing underutilized hotels and motels into modern, attainable apartment homes, we breathe new life into overlooked properties and neighborhoods. Our mission is to create spaces that inspire connection, stability, and long-term value - for residents, investors, and the communities we serve.</p>
                        <p>We combine adaptive reuse expertise with disciplined, impact-driven investing. Every project is rooted in deep market research, operational insight, and hands-on experience in development and management. We don’t just identify potential - we build it, transforming challenges into opportunity and vision into legacy.</p>
                        <Link to='/our-strategy' className='cta-btn2'>Learn How We Do It</Link>
                    </div>
                </div>
            </section>


            <section className='bg-blue-100'>
                <div className='two-col maxw-1200'>
                    <div className='card1'>
                        <img 
                            src={`${hotelBlue1Small}`}
                            className='img-sm'
                            alt='Small image of a hotel'
                            decoding='async'
                            fetchPriority='auto'
                            loading='lazy' />
                        <h2>Our Strategy</h2>
                        <p>Join us in turning hotel conversions into high-performing, impact-driven investments.</p>
                        <Link to='/our-strategy' className='cta-btn2'>How It Works</Link>
                    </div>
                    <div>
                        <div className='card-stacked'>
                            <img 
                                src={`${hotelBlue1Small}`}
                                className='img-xs'
                                alt='Small image of a hotel'
                                decoding='async'
                                fetchPriority='auto'
                                loading='lazy' />
                            <div>
                                <h3>Acquire Strategically</h3>
                                <p>Acquire distressed hotels in high-growth metros for adaptive reuse and workforce housing projects.</p>
                            </div>
                        </div>
                        <hr className='margin-y-2rem' />
                        <div className='card-stacked'>
                            <img 
                                src={`${hotelBlue1Small}`}
                                className='img-xs'
                                alt='Small image of a hotel'
                                decoding='async'
                                fetchPriority='auto'
                                loading='lazy' />
                            <div>
                                <h3>Transform with Purpose</h3>
                                <p>Convert hotels into workforce housing, maximizing design and community impact.</p>
                            </div>
                        </div>
                        <hr className='margin-y-2rem' />
                        <div className='card-stacked'>
                            <img 
                                src={`${hotelBlue1Small}`}
                                className='img-xs'
                                alt='Small image of a hotel'
                                decoding='async'
                                fetchPriority='auto'
                                loading='lazy' />
                            <div>
                                <h3>Stabilize & Refinance</h3>
                                <p>Refinance at 90%+ occupancy, maximizing investor returns and cash flow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='two-col two-col-end maxw-1200'>
                    <img 
                        src={`${hotelBlue3Small}`} 
                        alt='Image of a hotel'
                        decoding='async'
                        fetchPriority='auto'
                        loading='lazy' />
                    <div className='col-content'>
                        <h2>Our Team.</h2>
                        <p>Every successful hotel conversion begins with a team that understands both markets and mission. At HotelSHIFT Capital, we bring together experts in adaptive reuse, real estate investment, and economic research to repurpose underutilized properties into attainable housing that creates lasting community and investor value. Our approach blends analytical precision with practical experience in development, lending, and property transformation—ensuring every project is guided by insight and purpose.</p>
                        <p>As pioneers in impact investing, we believe that smart, data-driven real estate can do more than generate returns—it can revitalize neighborhoods and expand access to quality housing. By aligning financial performance with social impact, our team transforms overlooked assets into thriving communities that embody the future of sustainable, people-centered real estate.</p>
                        <a className='cta-btn2'>Who We Are</a>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home