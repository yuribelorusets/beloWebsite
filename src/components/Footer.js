import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const FooterContainer = styled.footer`
  background: ${props => props.isDarkMode ? '#2a2a2a' : 'white'};
  padding: 3rem 0;
  margin-top: 4rem;
  border-top: 1px solid ${props => props.isDarkMode ? '#444' : '#eee'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.isDarkMode ? '#e0e0e0' : '#333'};
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const FooterLink = styled.a`
  color: ${props => props.isDarkMode ? '#b0b0b0' : '#666'};
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #007bff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.isDarkMode ? '#b0b0b0' : '#666'};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.isDarkMode ? '#444' : '#eee'};
  color: ${props => props.isDarkMode ? '#b0b0b0' : '#666'};
  transition: color 0.3s ease, border-color 0.3s ease;
`;

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <FooterContent>
        <FooterSection>
          <FooterTitle isDarkMode={isDarkMode}>Navigation</FooterTitle>
          <FooterLink href="/" isDarkMode={isDarkMode}>Home</FooterLink>
          <FooterLink href="/aboutme" isDarkMode={isDarkMode}>About</FooterLink>
          <FooterLink href="/work" isDarkMode={isDarkMode}>Work</FooterLink>
          <FooterLink href="/education" isDarkMode={isDarkMode}>Education</FooterLink>
          <FooterLink href="/skills" isDarkMode={isDarkMode}>Skills</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle isDarkMode={isDarkMode}>Connect</FooterTitle>
          <FooterLink href="mailto:yuri.belorusets@gmail.com" isDarkMode={isDarkMode}>
            <FaEnvelope /> yuri.belorusets@gmail.com
          </FooterLink>
          <SocialLinks>
            <SocialLink href="https://github.com/yuribelorusets" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/yuribelorusets/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle isDarkMode={isDarkMode}>Resources</FooterTitle>
          <FooterLink href="/Yuri_Belorusets_Resume.pdf" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
            <FaFilePdf /> Resume
          </FooterLink>
          <FooterLink href="https://github.com/yuribelorusets" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
            GitHub
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/yuribelorusets/" target="_blank" rel="noopener noreferrer" isDarkMode={isDarkMode}>
            LinkedIn
          </FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright isDarkMode={isDarkMode}>
        © {new Date().getFullYear()} Belo. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;