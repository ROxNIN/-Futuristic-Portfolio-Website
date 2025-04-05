import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('❌ Failed to fetch projects:', err));
  }, []);

  return (
    <ProjectsContainer>
      <SectionTitle> My Projects</SectionTitle>

      {/* Hardcoded Projects with Video Previews */}
      <ProjectCard>
        <ProjectTitle>Shortest Path Finder</ProjectTitle>
        <VideoPreview autoPlay loop muted playsInline>
          <source src="/videos/shortest-path-finder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPreview>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>Ronin's Portfolio Website</ProjectTitle>
        <VideoPreview autoPlay loop muted playsInline>
          <source src="/videos/ronins-portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPreview>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>Ronin's Game Launcher</ProjectTitle>
        <VideoPreview autoPlay loop muted playsInline>
          <source src="/videos/ronins-game-launcher.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPreview>
      </ProjectCard>

      {/* Dynamically Fetched Projects */}
      {projects.map(project => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechStack><strong>Tech Stack:</strong> {project.tech_stack}</TechStack>
          <Links>
            <a href={project.github_url} target="_blank" rel="noreferrer">GitHub</a> | 
            <a href={project.live_url} target="_blank" rel="noreferrer"> Live</a>
          </Links>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

/* Styled Components */
const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 10px;
  text-align: center;
  background-color: black;
`;

/* My Project Title */
const SectionTitle = styled.h2`
  color: #ffffff;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  margin-bottom: 40px;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

const ProjectTitle = styled.h3`
  color: #d4aaff;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #ccc;
  margin-top: 10px;
`;

const TechStack = styled.p`
  color: #b0e0e6;
  font-style: italic;
`;

const Links = styled.div`
  margin-top: 10px;

  a {
    color: #00ffff;
    text-decoration: none;
    margin: 0 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;


/* Project preview box background */
const VideoPreview = styled.video`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.5);
`;
