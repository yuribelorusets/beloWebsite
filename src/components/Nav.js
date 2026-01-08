import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-nav);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px var(--shadow-light);
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
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-color);
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
  color: var(--text-primary);
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
    background: var(--accent-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: var(--accent-color);
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
  color: var(--text-primary);
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
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: var(--bg-hover);
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

const Backdrop = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--backdrop-light);
  z-index: 999;
  backdrop-filter: blur(2px);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--bg-card);
  padding: 2rem;
  box-shadow: -2px 0 10px var(--shadow-medium);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1001;
  overflow-y: auto;
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <NavContainer>
        <NavContent>
          <Logo to="/">Belo</Logo>
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
          </NavLinks>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <MobileThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </MobileThemeToggle>
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuButton>
          </div>
        </NavContent>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              data-mobile-menu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme" style={{ alignSelf: 'flex-start', display: 'flex' }}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </ThemeToggle>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
