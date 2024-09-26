import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <BackgroundAnimation className="background-animation" />
      <header className="App-header">
        <h1>Saurav Portfolio</h1>
        <p>
          Site under construction
        </p>
      </header>
    </Container>
  );
}

// Styled components
const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;

  h1 {
    color: white;
  }

  p {
    color: #ccc;
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #333, #111);
  overflow: hidden;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1), transparent);
    animation: moveBackground 10s linear infinite;
  }

  @keyframes moveBackground {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default App;
