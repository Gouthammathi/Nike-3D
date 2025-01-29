import React from "react";
import styled from "styled-components";

const Scroll = () => {
  return (
    <Container>
      <Text>
        Get Unlimited Discounts 🚀! Brand New Offers Every Week! 
        <span>N I K E</span>    
        <span>👟💨💥</span>  
        <span>Run Fast, Look Fresh! 💯</span>
      </Text>
    </Container>
  );
};

export default Scroll;

/* Styled Components */
const Container = styled.div`
  width: 100%;
  background-color: #000; /* Black background */
  overflow: hidden; /* Hide overflow content */
  white-space: nowrap; /* Prevent text from wrapping */
  padding: 3px 0; /* Add some vertical padding */
  display: flex; /* Flexbox layout */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Add shadow for a 3D effect */
  position: relative;
`;

const Text = styled.div`
  display: inline-block;
  color: #ffffff; /* White text */
  font-size: 13px; /* Increased text size for better visibility */
  font-weight: bold; /* Bold font */
  font-style: italic; /* Italic font */
  text-transform: uppercase; /* Capitalize all letters */
  animation: scroll-right 12s linear infinite; /* Continuous scroll effect */
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6); /* Glowing effect */
  padding: 0 20px; /* Add padding around text for better spacing */

  &:hover {
    color: #ff6600; /* Change color on hover */
    transform: scale(1.1); /* Slightly scale up on hover */
    text-shadow: 0 0 20px rgba(255, 102, 0, 0.8), 0 0 40px rgba(255, 102, 0, 0.6); /* Glowing effect on hover */
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(-100%); /* Start from the left */
    }
    50% {
      transform: translateX(0%); /* Scroll to the center */
    }
    100% {
      transform: translateX(100%); /* Move to the right */
    }
  }
`;
