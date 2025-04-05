import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import useNavigate & useLocation
import styled from "styled-components";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current path

  useEffect(() => {
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // ✅ Navigate to home if not already there
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Scroll to top if already on Home
    }
  };

  return (
    <NavContainer>
      <NavLinks>
        {/* ✅ Fixed Home button navigation */}
        <NavItem as="button" onClick={handleHomeClick}>Home</NavItem>
        <NavItem as="a" href="#about">About</NavItem>
        <NavItem as="a" href="#projects">Projects</NavItem>
        <NavItem as="a" href="#contact">Contact</NavItem>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10px;
  width: 100%;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  backdrop-filter: blur(10px);
`;

const NavItem = styled(motion.button)` /* ✅ Changed Home to a button */
  font-size: 1.2rem;
  font-weight: bold;
  color: #d4aaff;
  background: none;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 15px rgba(212, 170, 255, 1);
  }
`;
