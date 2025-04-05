import React from "react";
import styled from "styled-components";

const TechStackContainer = styled.div`
  text-align: center;
  padding: 50px;
  color: white;
`;

const TechStack = () => {
  return (
    <TechStackContainer>
      <h1>My Tech Stack</h1>
      <p>These are the technologies I work with.</p>
    </TechStackContainer>
  );
};

export default TechStack;
