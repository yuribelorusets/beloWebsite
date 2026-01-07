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
                I’m a Full Stack Software Engineer who loves turning messy, real-world problems into simple, reliable products. Before tech, I spent years in professional kitchens, and that experience still shapes how I work today: stay calm under pressure, move fast without cutting corners, and obsess over the details that make an experience feel effortless.
                </Paragraph>
                <Paragraph isDarkMode={isDarkMode}>
                These days, I focus on building end-to-end web applications and internal workflows that actually move the needle for users and teams. Recently, I helped automate complex transaction workflows to 80% coverage, saving over $2M in time and operational costs. I enjoy working across the stack with JavaScript/TypeScript, React, Node, Python, and SQL—whether that’s designing clean APIs, optimizing data flows, or refining the UX so it feels intuitive and fast.
                </Paragraph>
                <Paragraph isDarkMode={isDarkMode}>
                I’m especially interested in problems around growth, performance, and observability: making products faster, more insightful, and easier to adopt. I care a lot about writing clean, maintainable code, collaborating closely with cross-functional partners, and using data and experimentation to guide what to build next.
                </Paragraph>
                <Paragraph isDarkMode={isDarkMode}>
                When I’m not coding, you’ll usually find me cooking, surfing or skiing (depending on the season), shooting hoops, or exploring new spots around the Bay. If you’re working on something at the intersection of great UX, performance, and real-world impact, I’d love to connect.
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
