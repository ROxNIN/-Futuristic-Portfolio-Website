import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #0f0f0f, #1a1a2e);
  text-align: center;
  color: #fff;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, cyan, magenta);
  -webkit-background-clip: text;
  color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 10px;
  opacity: 0.8;
`;

const ResumeButton = styled(motion.a)`
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(45deg, cyan, magenta);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px cyan, 0 0 20px magenta;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Ronin 🚀
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Developer Passionate About Creating Futuristic Experiences
      </Subtitle>
      <ResumeButton
        href="/resume.pdf" // Replace with your actual resume link
        download
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Download Resume
      </ResumeButton>
    </HeroSection>
  );
};

export default Hero;
