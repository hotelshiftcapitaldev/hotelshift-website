import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './styles/App.css'

// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

// PAGES
import Home from './pages/Home'
import OurStrategy from './pages/OurStrategy'
import OurTeam from './pages/OurTeam'


function App() {
  const {pathname} = useLocation()

  /* Scroll to top of page whenever page changes */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-strategy' element={<OurStrategy />} />
        <Route path='/our-team' element={<OurTeam />} />
        {/* <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
