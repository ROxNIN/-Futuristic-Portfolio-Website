import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #1a1a2e;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 255, 255, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 15px rgba(255, 0, 255, 0.5);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  padding: 0 15px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </Card>
  );
};

export default ProjectCard;





