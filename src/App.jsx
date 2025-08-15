import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './Sections/Hero.jsx'
import About from './Sections/About.jsx'
import Services from './Sections/Services.jsx'
import Internships from './Sections/Internships.jsx'
import Careers from './Sections/Careers.jsx'
import Contact from './Sections/Contact.jsx'

export default function App() {
  // Optional: add a class to body for dark mode (could be toggled later)
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 bg-radial">
        <Hero />
        <About />
        <Services />
        <Internships />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
