import React from 'react';
import styled from '@emotion/styled';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <Nav />
      <MainContent>
        <Main />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
