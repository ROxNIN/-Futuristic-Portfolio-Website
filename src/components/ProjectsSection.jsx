import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    title: "Game Launcher",
    description: "A native desktop game launcher built with C++ and OpenGL.",
    image: "/assets/game-launcher.jpg", // Replace with actual image path
    link: "https://github.com/yourusername/game-launcher",
  },
  {
    id: 2,
    title: "Flappy Bird Clone",
    description: "A Java-based Flappy Bird clone with smooth physics.",
    image: "/assets/flappy-bird.jpg",
    link: "https://github.com/yourusername/flappy-bird",
  },
  {
    id: 3,
    title: "Dijkstra's Path Finder",
    description: "A C++ visualization tool for shortest pathfinding.",
    image: "/assets/path-finder.jpg",
    link: "https://github.com/yourusername/path-finder",
  },
];

const ProjectsContainer = styled.section`
  padding: 50px;
  background: #121212;
  color: white;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: #1a1a2e;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px cyan, 0 0 20px magenta;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
  color: cyan;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      <Grid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
