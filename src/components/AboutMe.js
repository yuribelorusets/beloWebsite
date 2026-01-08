import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #007bff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px var(--shadow-light);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Paragraph = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContactSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
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
    return (
        <AboutContainer>
            <Title>About Me</Title>
            <Content
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paragraph>
                I'm a Full Stack Software Engineer who loves turning real-world problems into simple, reliable software solutions. Before tech, I spent years in professional kitchens, and that experience still shapes how I work today: staying calm under pressure, moving fast without cutting corners, and obsessing over the details that make an experience feel effortless.
                </Paragraph>
                <Paragraph>
                These days, I focus on building end-to-end web applications and internal workflows that actually help users and teams. Recently, I helped automate complex transaction workflows to 80% coverage, saving over $2M in time and operational costs. I enjoy working across the stack with JavaScript/TypeScript, React, Node, Python, and SQL—whether that's designing clean APIs, optimizing data flows, or refining the UX so it feels intuitive and fast.
                </Paragraph>
                <Paragraph>
                I'm especially interested in problems around growth, performance, and observability: making products faster, more insightful, and easier to adopt. I care a lot about writing clean, maintainable code, collaborating closely with cross-functional partners, and using data and experimentation to guide what to build next.
                </Paragraph>
                <Paragraph>
                When I'm not coding, you'll usually find me cooking, surfing or skiing (depending on the season), shooting hoops, or exploring new spots around the Bay. If you're working on something at the intersection of great UX, performance, and real-world impact, I'd love to connect.
                </Paragraph>

                <ContactSection>
                    <ContactTitle>Get in Touch</ContactTitle>
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
