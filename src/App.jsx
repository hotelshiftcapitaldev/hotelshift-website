import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './styles/App.css'

// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

// PAGES
import Home from './pages/Home'
import OurStrategy from './pages/OurStrategy'
import OurTeam from './pages/OurTeam'


function App() {
  const pageChange = useNavigate()

  /* Scroll to top of page whenever page changes */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageChange])

  return (
    <>
      <Header />
      <Routes location={location}>
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
