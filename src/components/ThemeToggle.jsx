import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ToggleButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
  transition: 0.3s;
  
  &:hover {
    background: ${({ theme }) => (theme.primary === "#00ffff" ? "#ff00ff" : "#00ffff")};
  }
`;

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </ToggleButton>
  );
};

export default ThemeToggle;
