// ASSETS
import hotelBlue1Large from '../assets/background/hotel-blue-1-large.jpg'
import hotelBlue2Large from '../assets/background/hotel-blue-2-large.jpg'
import hotelBlue3Large from '../assets/background/hotel-blue-3-large.jpg'
import hotelBlue1Small from '../assets/background/hotel-blue-1-small.jpg'
import hotelBlue2Small from '../assets/background/hotel-blue-2-small.jpg'
import hotelBlue3Small from '../assets/background/hotel-blue-3-small.jpg'
import planningMedium from '../assets/background/planning-medium.jpg'
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
import BGImage from '../components/BGImage'

// PAGES
import Hero2 from '../components/Hero2'

// MAP OUT TEAM MEMBERS
import teamMembers from '../data/teamData'
const teamCard = teamMembers.map(member => (
    <div className='team-card'>
        <div className='img-container'>
            <img 
                className=''
                src={`${member.image}`} 
                alt={`Image of ${member.name}`}
                decoding='async'
                fetchPriority='auto'
                loading='lazy' />
        </div>
        <h3>{member.name}</h3>
        <p><b>{member.title}</b></p>
        <p>{member.shortDescription}</p>
        <hr />
    </div>
))


const OurTeam = () => {


    return (
        <>
            <Hero2 bgImage={hotelBlue1Large} pageTitle="Meet Our Team" />
            
            <section className='flex-wrap mh60'>
                <h2>Team & Strategic Backing</h2>
                <div className='flex-wrap'>
                    {teamCard}
                </div>
            </section>

            <section className='multi-section-mid mh60 bg-blue-500-opaque'>
                <BGImage bgImage={planningMedium} />
                <div className='maxw-1500'>
                    <h2>Led By Builders, <span className='text-yellow-500'>Backed By Investors.</span></h2>
                </div>
            </section>

            <CTASection />
        </>
    )
}

export default OurTeam