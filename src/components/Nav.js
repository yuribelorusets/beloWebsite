import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isDarkMode
    ? 'rgba(26, 26, 26, 0.95)'
    : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(5px);
  box-shadow: ${props => props.isDarkMode
    ? '0 2px 10px rgba(0, 0, 0, 0.5)'
    : '0 2px 10px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.isDarkMode ? '#e0e0e0' : '#333'};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.isDarkMode ? '#e0e0e0' : '#333'};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #007bff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #007bff;
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.isDarkMode ? '#e0e0e0' : '#333'};
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${props => props.isDarkMode ? '#e0e0e0' : '#333'};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileThemeToggle = styled(ThemeToggle)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background: ${props => props.isDarkMode ? '#2a2a2a' : 'white'};
  padding: 2rem;
  box-shadow: ${props => props.isDarkMode
    ? '-2px 0 10px rgba(0, 0, 0, 0.5)'
    : '-2px 0 10px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/aboutme', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
  ];

  return (
    <NavContainer isDarkMode={isDarkMode}>
      <NavContent>
        <Logo to="/" isDarkMode={isDarkMode}>Belo</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              isDarkMode={isDarkMode}
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavLinks>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <MobileThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </MobileThemeToggle>
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isDarkMode={isDarkMode}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </div>
      </NavContent>

      <MobileMenu
        isDarkMode={isDarkMode}
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode} aria-label="Toggle theme" style={{ alignSelf: 'flex-start', display: 'flex' }}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
            isDarkMode={isDarkMode}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </NavContainer>
  );
};

export default Nav;
