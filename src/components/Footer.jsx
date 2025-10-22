import logo from '../assets/logo/logo.png'



const Footer = () => {


    return (
        <footer className="footer">
            <section className='footer-wrapper maxw-1200'>
                {/* Logo */}
                <a href='#header' className='logo-container'>
                    {/* <h2 className='site-title'>HotelShift</h2> */}
                    <img src={logo} alt='Logo' className='logo' />
                </a>

                {/* Business Info */}
                <nav className="business-info" aria-label='Business Information'>
                    <ul>
                        <li><a href='mailto:hello@hotelshift.capital'>hello@hotelshift.capital</a></li>
                        <li>400 Reservoir&nbsp;Ave, Providence,&nbsp;Rhode&nbsp;Island&nbsp;02907</li>
                    </ul>
                </nav>

                <hr></hr>

                {/* Site Map */}
                <nav className="site-map" aria-label='Footer Navigation'>
                    <ul>
                        <li><a href='#property-listings'>The Hotel Shift Strategy</a></li>
                        <li><a href='#contact'>Newsroom</a></li>
                        <li><a href='#contact'>Our Team</a></li>
                        <li><a href='#contact'>Why Hotels?</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                {/* Copyright */}
                <address className="copyright">
                    &copy; {new Date().getFullYear()} HotelShift. All rights reserved.
                </address>
                <a className='privacy' href=''>Privacy Policy</a>
            </section>
        </footer>
    )
}

export default Footer