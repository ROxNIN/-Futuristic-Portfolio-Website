import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <HomeContainer>
      <Title initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      Yo! I’m VIVEK aka RONIN - <span> Turning caffeine into blazing-fast experiences. </span>
      </Title>
      <Subtitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}>
        Exploring technology with style & innovation.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(98, 0, 234, 0.2) 10%, transparent 80%);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #ffffff;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);

  span {
    color: #d4aaff;
    text-shadow: 0px 0px 30px rgba(212, 170, 255, 1);
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
`;
