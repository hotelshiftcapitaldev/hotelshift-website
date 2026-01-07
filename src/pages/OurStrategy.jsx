// ASSETS
import hotelBlue2Large from '../assets/background/hotel-blue-2-large.jpg'
import hotelBlue3Large from '../assets/background/hotel-blue-3-large.jpg'
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue2Small from '../assets/background/hotel-blue-2-small.jpg'
import hotelBlue3Small from '../assets/background/hotel-blue-3-small.jpg'
// LOGO
import logoWhite from '../assets/logo/logo-white.png'
// ICONS
import autorenewYellow from '../assets/icons/autorenew_yellow.svg'
import nearmeYellow from '../assets/icons/nearme_yellow.svg'
import sellYellow from '../assets/icons/sell_yellow.svg'
// IMAGE
import howItsDone from '../assets/images/how_its_done.png'


// COMPONENTS
import CTASection from '../components/CTASection'

// PAGES
import Hero2 from '../components/Hero2'


const OurStrategy = () => {


    return (
        <>
            <Hero2 bgImage={hotelBlue3Large} />
            
            <section className='multi-section-top mh60'>
                <div className='two-col gap-2 two-col-start maxw-1500'>
                    <div className=''>
                        <h2>Why Multifamily?</h2>
                        <div className='grid-2x2'>
                            <p><b>Limited Supply.</b><br /> Class C buildings are the least economical to build.</p>
                            <p><b>Occupied.</b><br /> Class C buildings have historically experienced low vacancy.</p>
                            <p><b>Durable Demand.</b><br /> Class C buildings are in demand during all economic environments.</p>
                            <p><b>High Interest Rates.</b><br /> High mortgage rates will increase demand for workforce rentals.</p>
                        </div>
                    </div>
                    <div className=''>
                        <h2>Why Convert Hotels?</h2>
                        <div className='two-col-left gap-2 two-col-start'>
                            <img 
                                src={`${autorenewYellow}`} 
                                alt='small icon'
                                decoding='async'
                                fetchPriority='auto'
                                loading='lazy' />
                            <div className='col-content'>
                                <p><b>Straightforward Conversion.</b><br />Hospitality properties can be refurbished to become apartments & extended stay hotels have rooms that contain kitchens leaving the building in need of few changes.</p>
                            </div>
                        </div>
                        <div className='two-col-left gap-2 two-col-start'>
                            <img 
                                src={`${nearmeYellow}`} 
                                alt='small icon'
                                decoding='async'
                                fetchPriority='auto'
                                loading='lazy' />
                            <div className='col-content'>
                                <p><b>Great Locations.</b><br />Hospitality properties are regularly in excellent, central locations.</p>
                            </div>
                        </div>
                        <div className='two-col-left gap-2 two-col-start'>
                            <img 
                                src={`${sellYellow}`} 
                                alt='small icon'
                                decoding='async'
                                fetchPriority='auto'
                                loading='lazy' />
                            <div className='col-content'>
                                <p><b>Competitively Priced.</b><br />Hotels trade at significantly lower valuations than multifamily properties, allowing us to purchase them at attractive prices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='multi-section-mid mh60 bg-blue-500'>
                <div className='maxw-1500'>
                    <center><h2>How Exactly Is This Done?</h2></center>
                    <img 
                        src={`${howItsDone}`} 
                        alt='a diagram of the hotelshift strategy'
                        decoding='async'
                        fetchPriority='auto'
                        loading='lazy'
                        className='lg-img margin-y-2rem maxw-1200' />
                    <center>
                        <img 
                            src={`${logoWhite}`} 
                            alt='HotelShift logo white'
                            decoding='async'
                            fetchPriority='auto'
                            loading='lazy'
                            className='maxw-200' />
                    </center>
                </div>
            </section>

            <CTASection />
        </>
    )
}

export default OurStrategy