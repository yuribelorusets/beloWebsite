import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #007bff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled(motion.div)`
  background: ${props => props.isDarkMode ? '#2a2a2a' : 'white'};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.isDarkMode
    ? '0 4px 6px rgba(0, 0, 0, 0.5)'
    : '0 4px 6px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const Paragraph = styled.p`
  color: ${props => props.isDarkMode ? '#b0b0b0' : '#666'};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;
`;

const ContactSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.isDarkMode ? '#444' : '#eee'};
  transition: border-color 0.3s ease;
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.isDarkMode ? '#e0e0e0' : '#333'};
  transition: color 0.3s ease;
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const AboutMe = () => {
    const { isDarkMode } = useTheme();

    return (
        <AboutContainer>
            <Title>About Me</Title>
            <Content
                isDarkMode={isDarkMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paragraph isDarkMode={isDarkMode}>
                    I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
                    My journey in software development has led me to build various web applications, from social media platforms
                    to job search engines and property sharing services.
                </Paragraph>
                <Paragraph isDarkMode={isDarkMode}>
                    With expertise in React, Node.js, and Python, I enjoy creating seamless user experiences while ensuring
                    robust backend functionality. I'm particularly interested in building scalable applications and implementing
                    modern web technologies to solve real-world problems.
                </Paragraph>
                <Paragraph isDarkMode={isDarkMode}>
                    When I'm not coding, I'm constantly learning new technologies and contributing to open-source projects.
                    I believe in writing clean, maintainable code and following best practices in software development.
                </Paragraph>

                <ContactSection isDarkMode={isDarkMode}>
                    <ContactTitle isDarkMode={isDarkMode}>Get in Touch</ContactTitle>
                    <ContactLinks>
                        <ContactLink href="mailto:yuri.belorusets@gmail.com">
                            <FaEnvelope /> yuri.belorusets@gmail.com
                        </ContactLink>
                        <ContactLink href="https://github.com/yuribelorusets" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </ContactLink>
                        <ContactLink href="https://www.linkedin.com/in/yuribelorusets/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </ContactLink>
                        <ContactLink href="/Yuri_Belorusets_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <FaFilePdf /> Download Resume
                        </ContactLink>
                    </ContactLinks>
                </ContactSection>
            </Content>
        </AboutContainer>
    );
};

export default AboutMe;
