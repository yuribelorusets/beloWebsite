import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import pp from '../images/pp.jpeg';

const HomeContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const ProfilePicture = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 2rem;
  border: 4px solid var(--border-color);
  box-shadow: 0 4px 6px var(--shadow-light);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #007bff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfilePicture
            src={pp}
            alt="Yuri Belorusets"
            variants={itemVariants}
          />
          <Title variants={itemVariants}>
            Hi, I'm Yuri Belorusets
          </Title>
          <Subtitle variants={itemVariants}>
            Full Stack Engineer & Chef
          </Subtitle>
          <SocialLinks variants={itemVariants}>
            <SocialLink href="https://github.com/yuribelorusets" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/yuribelorusets/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;