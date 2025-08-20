import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Services from "./Sections/Services.jsx";
import Internships from "./Sections/Internships.jsx";
import Contact from "./Sections/Contact.jsx";
import Media from "./Sections/Media.jsx"; // Careers will open this Media section

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 bg-radial">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Internships />
                  <Contact />
                </>
              }
            />
            <Route path="/media" element={<Media />} /> {/* Careers/Media */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
