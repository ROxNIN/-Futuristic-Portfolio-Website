import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus, SiStyledcomponents, SiFramer } from "react-icons/si";

const techSkills = [
  { id: 1, name: "C", icon: <SiCplusplus color="#00599C" /> },
  { id: 2, name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { id: 3, name: "Java", icon: <FaJava color="#007396" /> },
  { id: 4, name: "Python", icon: <FaPython color="#3776AB" /> },
  { id: 5, name: "HTML", icon: <FaFigma color="#F24E1E" /> },
  { id: 6, name: "Css", icon: <SiStyledcomponents color="#DB7093" />},
  { id: 7, name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { id: 8, name: "SQL", icon: <SiMongodb color="#4479A1" /> },
  { id: 9, name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { id: 10, name: "Data Structure", icon: <FaFigma color="#F24E1E" /> },
  { id: 11, name: "Algorithm", icon: <SiStyledcomponents color="#DB7093" /> },
];

const TechContainer = styled.section`
  padding: 50px;
  background: #121212;
  color: white;     
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const TechItem = styled(motion.div)`
  background: #1a1a2e;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px cyan, 0 0 20px magenta;
  }
`;

const TechName = styled.p`
  margin-top: 5px;
  font-size: 1rem;
`;

const TechStack = () => {
  return (
    <TechContainer>
      <h2>Skills</h2>
      <Grid>
        {techSkills.map((tech) => (
          <TechItem
            key={tech.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {tech.icon}
            </motion.div>
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </Grid>
    </TechContainer>
  );
};


export default TechStack;
