import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TechStack from "../components/TechStack";

const About = () => {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </Title>
      <Content>
        <p>
          I'm a <strong>motivated and detail-oriented Computer Science student</strong> with a strong foundation in 
          C++, Java, and problem-solving. Passionate about building <strong>efficient and scalable solutions</strong> while 
          continuously learning and improving my skills.
        </p>
      </Content>

      {/* Education Section */}
      <Section>
        <SectionTitle>🎓 Education</SectionTitle>
        <List>
          <ListItem>
            <strong>Amity University</strong> - Bachelor of Science in Computer Science (2022 – 2026) | Jharkhand, Ranchi
          </ListItem>
          <ListItem>
            <strong>BNS DAV PUBLIC SCHOOL, GIRIDIH</strong> - Intermediate | 2020
          </ListItem>
          <ListItem>
            <strong>BNS DAV PUBLIC SCHOOL, GIRIDIH</strong> - Matriculation | 2018
          </ListItem>
        </List>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle>🏆 Experience</SectionTitle>
        <List>
          <ListItem>Finalist - <strong>Smart India Hackathon (SIH) | 2023</strong></ListItem>
        </List>
      </Section>

      {/* Tech Stack Section */}
      <TechStackWrapper>
        <TechStack />
      </TechStackWrapper>

      {/* Projects Section (Optional) */}
      <Section>
        <SectionTitle>🚀 Projects</SectionTitle>
        <List>
          <ListItem>
            <strong>➣  Game Launcher (C++ + Crow Web Framework)</strong> - A native desktop launcher integrating multiple games.
          </ListItem>
          <ListItem>
            <strong>➣  Drug Trafficking Detection System (MERN Stack)</strong> - Software to detect and analyze suspicious activities on messaging platforms.
          </ListItem>
          <ListItem>
            <strong>➣  Shortest Path Finder (C++ Dijkstra’s Algorithm)</strong> - A visual pathfinding tool using C++.
          </ListItem>
        </List>
      </Section>

    </AboutContainer>
  );
};

export default About;

/* About page background */
const AboutContainer = styled.div`
  padding: 80px 10%;
  background: black;
  text-align: center;
`;
/* About Title */
const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 0px 0px 15px rgba(212, 170, 255, 0.8);
  margin-bottom: 30px;
`;

/* About me content */
const Content = styled(motion.div)`
  font-size: 1.2rem;
  color: #d4aaff;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

/* About Section: Education, Experience, Projects Box(Section)- Background */
const Section = styled.div`
  margin-top: 120px;
  padding: 50px;
  background: #1a1a2e;
  border-radius: 10px;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Section Title
const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  text-shadow: 0 0 10px cyan, 0 0 20px magenta;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  margin: 10px 0;
  color: #d4aaff;
  opacity: 0.9;
`;

const TechStackWrapper = styled.div`
  margin-top: 40px;
`;
