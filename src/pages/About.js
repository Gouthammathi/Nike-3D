import React from "react";
import styled from "styled-components";
import shoe1 from "../components/images/shoe1.png";
import shoe2 from "../components/images/shoe2.png";
//import shoe3 from "../components/images/shoe3.png";
import shoe5 from "../components/images/shoe5.png";
import shoe6 from "../components/images/shoe6.png";
import shoe7 from "../components/images/shoe7.png";
import shoe8 from "../components/images/shoe8.png";
import shoe9 from "../components/images/shoe9.png";
import sh1 from "../components/images/sh1.png";
import sh2 from "../components/images/sh2.png";
import sh3 from "../components/images/sh3.png";

const shoes = [
  { src: shoe1, name: "Nike Air Max 1", description: "Classic style with modern comfort." },
  { src: shoe2, name: "Nike Air Force 1", description: "Timeless design for everyday wear." },
  { src: shoe5, name: "Nike React Infinity Run", description: "Engineered for comfort and support." },
  { src: shoe6, name: "Nike ZoomX Vaporfly NEXT%", description: "Speed and performance for serious runners." },
  { src: shoe7, name: "Nike Air Zoom Pegasus", description: "Versatile running shoe for all distances." },
  { src: shoe8, name: "Nike Blazer Mid", description: "Retro basketball style for everyday wear." },
  { src: shoe9, name: "Nike Dunk Low", description: "Street style with a classic silhouette." },
  { src: sh1, name: "Nike Air Max 270", description: "Maximum air for all-day comfort." },
  { src: sh2, name: "Nike Air Huarache", description: "Iconic design with a snug fit." },
  { src: sh3, name: "Nike Free RN", description: "Natural feel for a more connected run." },
];

const About = () => {
  return (
    <CardsContainer>
      {shoes.map((shoe, index) => (
        <StyledWrapper key={index}>
          <div className="card">
            <div className="card-img">
              <div className="img">
                <img src={shoe.src} alt={shoe.name} />
              </div>
            </div>
            <div className="card-title">{shoe.name}</div>
            <div className="card-subtitle">{shoe.description}</div>
            <div className="card-divider" />
            <div className="card-footer">
              <div className="card-price"><span>$</span> 99.99</div>
              <button className="card-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '20px', height: '20px', marginBottom: '5px' }}>
                  <path d="M397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
                  <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                  <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                  <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
                </svg>
              </button>
            </div>
          </div>
        </StyledWrapper>
      ))}
    </CardsContainer>
  );
};

// Styled Components
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap */
  justify-content: center; /* Center cards horizontally */
  gap: 20px; /* Space between cards */
  padding: 20px;

  @media (max-width: 768px) {
    justify-content: center; /* Center cards on smaller screens */
  }

  @media (max-width: 480px) {
    justify-content: center; /* Center cards on mobile */
  }
`;

const StyledWrapper = styled.div`
  .card {
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    --main-focus: #2d8cf0;
    width: 230px;
    height: 300px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    gap: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 10px; /* Added margin for spacing around each card */
  }

  .card-img {
    display: flex;
    justify-content: center;
  }

  .card-img .img {
    position: relative;
    width: 100px;
    height: 100px;
    border-top-left-radius: 80px 50px;
    border-top-right-radius: 80px 50px;
    background-color: transparent; /* Removed white background */
  }

  .card-img .img img {
    width: 100%; /* Ensure the image fills the container */
    height: auto; /* Maintain aspect ratio */
  }

  .card-title {
    font-size: 20px;
    font-weight: 500;
    text-align: center; /* Center align title */
    color: var(--font-color);
  }

  .card-subtitle {
    font-size: 14px;
    font-weight: 400;
    text-align: center; /* Center align subtitle */
    color: var(--font-color-sub);
  }

  .card-divider {
    height: 1px;
    background-color: var(--main-color);
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card-price {
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color);
  }

  .card-btn {
    height: 35px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 5px;
    padding: 0 15px;
    display: flex;
    align-items: center; /* Center icon and text vertically */
    justify-content: center; /* Center icon and text horizontally */
    transition: all 0.3s;
  }

  .card-btn:hover {
    border: 2px solid var(--main-focus);
  }
`;

export default About;
