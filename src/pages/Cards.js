import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import shoe1 from "../components/images/shoe1.png";
import shoe2 from "../components/images/shoe2.png";
import shoe3 from "../components/images/shoe3.png";
import shoe5 from "../components/images/shoe5.png";
import shoe6 from "../components/images/shoe6.png";
import shoe7 from "../components/images/shoe7.png";
import shoe8 from "../components/images/shoe8.png";
import shoe9 from "../components/images/shoe9.png";
import sh1 from "../components/images/sh1.png";
import sh2 from "../components/images/sh2.png";
import sh3 from "../components/images/sh3.png";

const Cards = () => {
  const images = [shoe1, shoe2, shoe3, shoe5, shoe6, shoe7, shoe8, shoe9, sh1, sh2, sh3];

  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);

  const startScrolling = () => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Adjust speed
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0; // Reset to start for seamless loop
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };
    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopScrolling = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  return (
    <CarouselWrapper ref={carouselRef}>
      {/* Duplicate images for seamless looping */}
      {[...images, ...images].map((src, index) => (
        <ImageWrapper key={index}>
          <img src={src} alt={`Shoe ${index + 1}`} className="hover-image" />
        </ImageWrapper>
      ))}
    </CarouselWrapper>
  );
};

// Styled Components
const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* Space between images */
  overflow-x: hidden; /* Hide overflow for seamless scroll */
  position: relative;
  background-color: #f5f5f5;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto; /* Prevent wrapping */
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .hover-image {
    object-fit: contain;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    width: 100%;
    height: 100%;
    background: none;

    &:hover {
      transform: scale(1.2); /* Zoom effect on hover */
      filter: brightness(1.2);
    }
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export default Cards;
