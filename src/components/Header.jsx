import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null)
    const menuButtonRef = useRef(null)

    // toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    // close menu
    const closeMenu = () => {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus() // restores focus to menu button when closing
    }

    // close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !menuButtonRef.current.contains(event.target)
            ) { closeMenu() }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    },[isMenuOpen])

    // ACCESSBILITY close menu on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            // check if escape button was pressed AND the menu is open
            if (event.key === 'Escape' && isMenuOpen) {
                closeMenu()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isMenuOpen]) // runs each time menu opens or closes

    // disable scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto' // if menu is open, set body overflow to hidden

        // move focus to the first nav link when the menu opens
        if (isMenuOpen) {
            setTimeout(() => {
                menuRef.current?.querySelector('a')?.focus()
            }, 100)
        }

        // cleanup the effect on component unmount to re-enable scrolling
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    return (
        <header id='header'>
            <nav className='main-nav' aria-label='Main Navigation'>
                {/* Logo and Name Section */}
                <a href='#header' className='logo-container'>
                    {/* <h2 className='site-title'>HotelShift</h2> */}
                    <img src={logo} alt='Logo' className='logo' />
                </a>

                {/* Navigation Links */}
                <ul 
                    id='nav-menu'
                    ref={menuRef}
                    className={`nav-links ${isMenuOpen ? 'active' : ''}`}
                    aria-labelledby='main-navigation'>
                    {isMenuOpen ? <li><a href='#header' onClick={closeMenu}>Home</a></li> : <></> }
                    <li><a href='#property-listings' onClick={closeMenu}>The HotelShift Strategy</a></li>
                    <li><a href='#contact' onClick={closeMenu}>Newsroom</a></li>
                    <li><a href='#contact' onClick={closeMenu}>Our Team</a></li>
                    <li><a href='#contact' onClick={closeMenu}>Why Hotels?</a></li>
                    <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
                </ul>
                
                {/* Signup Button */}
                <button 
                    className='signup-btn' 
                    // aria-expanded={isMenuOpen}
                    // aria-controls='nav-menu'
                    // onClick={toggleMenu}
                    // onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}>
                    >Sign Up
                </button>

                {/* Hamburger Icon for Mobile */}
                <button 
                    ref={menuButtonRef}
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                    aria-expanded={isMenuOpen}
                    aria-controls='nav-menu'
                    onClick={toggleMenu}
                    onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}>
                    <span className='sr-only'>Toggle menu</span>
                    <span className={`line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`line ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
            </nav>
        </header>
    );
}

export default Header;