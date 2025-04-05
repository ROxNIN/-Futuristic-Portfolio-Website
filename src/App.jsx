import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  background: black;
  color: #0ff;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  display: block;
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    setTimeout(() => {
      const sections = document.querySelectorAll("section");

      if (sections.length > 0) {
        gsap.from(sections, {
          opacity: 1, // ✅ Kept opacity at 1 as requested
          y: 50,
          duration: 1.2,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sections[0],
            start: "top 80%",
          },
        });
      }
    }, 100);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
        <Helmet>
          <title>Ronin's Portfolio</title>
          <meta name="description" content="Futuristic portfolio of Ronin, showcasing projects, skills, and contact info." />
        </Helmet>

        <Background />
        <ParticlesBackground />

        <AppContainer>
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* ✅ Sections for smooth scrolling with consistent styles */}
            <Section id="about"><About /></Section>
            <Section id="projects"><Projects /></Section>
            <Section id="contact"><Contact /></Section>
          </main>

          <Footer />
        </AppContainer>
      </HelmetProvider>
    </Router>
  );
}

export default App;


