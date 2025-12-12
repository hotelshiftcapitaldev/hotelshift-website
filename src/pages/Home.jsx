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
            <section className='multi-section-top'>
                <div className='two-col two-col-start maxw-1200'>
                    <img 
                        src={`${hotelBlue2Small}`} 
                        alt='Image of a hotel'
                        decoding='async'
                        fetchPriority='auto'
                        loading='lazy' />
                    <div className='col-content'>
                        <h2>Make SHIFT Happen.</h2>
                        <ol>
                            <li>We don't take entitlement risk - we only lose after we've overcome zoning and regulatory hurdles.</li>
                            <li>We only convert hotels & we only convert to multifamily.</li>
                            <li>We want to provide the best value C class unit in the markets where we operate.</li>
                            <li>We have in-house property management which allows us to operate during construction to maximize cashflow.</li>
                            <li>We are laser focused - Hotel Conversion is all we do.</li>
                        </ol>
                        <Link to='/our-strategy' className='cta-btn btn-yellow'>Learn How We Do It</Link>
                    </div>
                </div>
            </section>


            


            <section className='multi-section-bottom'>
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
                        <a className='cta-btn btn-yellow'>Who We Are</a>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home