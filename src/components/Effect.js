import React, { useState } from 'react';
import styled from 'styled-components';
import images from './images.json'; // Importing images from JSON

const Effect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Function to handle previous slide
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <CarouselContainer>
      {/* Images */}
      <ImageSlide>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </ImageSlide>

      {/* Navigation Buttons */}
      <NavButton onClick={goToPrevious} position="left">
        &#10094; {/* Left Arrow */}
      </NavButton>
      <NavButton onClick={goToNext} position="right">
        &#10095; {/* Right Arrow */}
      </NavButton>

      {/* Dots Navigation */}
      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Effect;

/* Styled Components */
const CarouselContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageSlide = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px; /* Optional: rounded corners */
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  ${({ position }) => position}: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#333' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
