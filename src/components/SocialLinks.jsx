import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialContainer = styled.div`
  margin-top: 30px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  font-size: 2rem;
  color: cyan;
  transition: 0.3s;
  &:hover {
    color: #00ffaa;
    text-shadow: 0 0 10px #00ffaa;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialIcon href="https://github.com/your-profile" target="_blank">
        <FaGithub />
      </SocialIcon>
      <SocialIcon href="https://linkedin.com/in/your-profile" target="_blank">
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/your-profile" target="_blank">
        <FaTwitter />
      </SocialIcon>
    </SocialContainer>
  );
};

export default SocialLinks;
