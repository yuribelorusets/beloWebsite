import React from 'react';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--bg-card);
  padding: 3rem 0;
  margin-top: 4rem;
  border-top: 1px solid var(--border-color);
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
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: color 0.3s ease, border-color 0.3s ease;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <FooterLink href="mailto:yuri.belorusets@gmail.com">
            <FaEnvelope /> yuri.belorusets@gmail.com
          </FooterLink>
          <SocialLinks>
            <SocialLink href="https://github.com/yuribelorusets" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/yuribelorusets/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="/Yuri_Belorusets_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFilePdf /> Resume
          </FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Belo. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;