import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Ronin Portfolio. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px 0;
  background: black; /* ✅ Maintains futuristic theme */
`;

const FooterText = styled.p`
  color: #d4aaff; /* Neon Purple */
  font-size: 1rem;
  text-shadow: 0px 0px 10px rgba(212, 170, 255, 0.8);
`;
