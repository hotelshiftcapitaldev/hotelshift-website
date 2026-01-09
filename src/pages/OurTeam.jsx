// ASSETS
import hotelBlue1Large from '../assets/background/hotel-blue-1-large.jpg'
import planningMedium from '../assets/background/planning-medium.jpg'

// COMPONENTS
import CTASection from '../components/CTASection'
import BGImage from '../components/BGImage'

// PAGES
import Hero2 from '../components/Hero2'

// MAP OUT TEAM MEMBERS
import teamMembers from '../data/teamData'
const teamCard = teamMembers.map(member => (
    <div key={member.name} className='team-card'>
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
            
            <section className='mh60'>
                <h2><center>Team & Strategic Backing</center></h2>
                <div className='flex-wrap'>
                    {teamCard}
                </div>
            </section>

            <section className='multi-section-mid mh60 bg-blue-500-opaque'>
                <BGImage bgImage={planningMedium} className='bg-img z-index--10' />
                <div className='maxw-1500'>
                    <h2>Led By Builders, <span className='text-yellow-500'>Backed By Investors.</span></h2>
                </div>
            </section>

            <CTASection />
        </>
    )
}

export default OurTeam