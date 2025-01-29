import React from 'react';
import styled from 'styled-components';
import bg from '../components/images/bg.png'; // Background image
import '@fontsource/anton'; // Anton font fetched from Google Fonts

const Hero = () => {
  return (
    <HeroWrapper>
      {/* Hero Section with fixed watermark text and background image */}
      <HeroContainer>
        <BackgroundImage src={bg} alt="Background" />
        <WatermarkText>
          <i>NIKE</i>
        </WatermarkText>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;

/* Styled Components */
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* You can adjust this height if needed */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%; /* Center vertically */
  left: 52%; /* Center horizontally */
  width: 220px; /* Adjusted width for mobile view */
  height: 220px; /* Adjusted height for mobile view */
  object-fit: cover; /* Ensures the image covers the container */
  transform: translate(-50%, -50%); /* Center the image */
  z-index: 0; /* Places the background behind the content */

  /* Media query for desktop view */
  @media (min-width: 769px) {
    width: 300px; /* Adjusted width for desktop view */
    height: 300px; /* Adjusted height for desktop view */
    margin: auto; /* Center the image */
  }
`;

const WatermarkText = styled.div`
  position: absolute; /* Keeps the watermark static and fixed on the screen */
  top: 50%;
  left: 50%; /* Default value for desktop */
  transform: translate(-50%, -50%);
  font-family: 'Anton', sans-serif; /* Anton font applied here */
  font-size: 200px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.1); /* Adjusted opacity for better visibility */
  user-select: none;
  z-index: 1; /* Keeps it above the background */

  /* Media query for mobile view */
  @media (max-width: 768px) {
    left: 44%; /* Change left to 44% on mobile view */
  }
`;