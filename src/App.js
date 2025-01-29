import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; // Import the Loader component
import Layout from './components/Layout'; // Import the Layout component
import styled from 'styled-components';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set to false after 3 seconds to hide the loader
    }, 3000); // 3 seconds timeout

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <StyledApp>
      {isLoading ? (
        <LoaderContainer>
          <Loader /> {/* Show the loader during the 3 seconds */}
        </LoaderContainer>
      ) : (
        <Layout /> 
      )}
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes full height */
  background-color: #f0f0f0;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export default App;