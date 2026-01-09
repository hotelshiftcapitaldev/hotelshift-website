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
            <section className='multi-section-top mh60'>
                <div className='two-col two-col-start maxw-1500'>
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

            <section className='multi-section-mid mh60 bg-blue-500'>
                <div className='maxw-1500'>
                    <h2>We combine the <span className='text-yellow-500'>high demand for workforce housing</span> with the <span className='text-yellow-500'>high supply of older hotels.</span></h2>
                </div>
            </section>
            


            <section className='multi-section-bottom mh60'>
                <div className='two-col two-col-end maxw-1500'>
                    <img 
                        src={`${hotelBlue3Small}`} 
                        alt='Image of a hotel'
                        decoding='async'
                        fetchPriority='auto'
                        loading='lazy' />
                    <div className='col-content'>
                        <h2>Our Team.</h2>
                        <p>HotelSHIFT Capital is led by professionals with experience in adaptive reuse, real estate investment, and economic analysis. We focus on converting underutilized hotel assets into attainable housing through a disciplined, data-driven approach.</p>
                        <p>Our team brings practical expertise across development, lending, and asset repositioning, allowing us to evaluate risk, execute efficiently, and align returns with long-term asset performance. We invest where fundamentals support both durable cash flow and sustainable community outcomes.</p>
                        <Link to='/our-team' className='cta-btn btn-yellow'>Meet The Team</Link>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home