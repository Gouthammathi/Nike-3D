import React from 'react';
import styled from 'styled-components';
import video from '../components/images/bg.mp4'; // Import the video file
const Card = () => {
  return (
    <StyledWrapper>
      <div className="brutal-subscribe">
        <div className="brutal-subscribe__container">
          <div className="brutal-subscribe__header">
            <span className="brutal-subscribe__title">NIKE</span>
            <span className="brutal-subscribe__subtitle">Grab the latest drops⚡</span>
          </div>
          <form className="brutal-subscribe__form">
            <input type="email" className="brutal-subscribe__input" placeholder="YOUR@EMAIL.COM" required />
            <button type="submit" className="brutal-subscribe__button">SUBSCRIBE</button>
          </form>
          <div className="brutal-subscribe__decor">WEEKLY</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const App = () => {
  return (
    <PageContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <CenteredContainer>
        <Card />
      </CenteredContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Ensures video stays behind all content */
  opacity: 1; /* Ensures the video is visible */
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  z-index: 1; /* Ensures the content is above the video */
`;

const StyledWrapper = styled.div`
  .brutal-subscribe__container {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    border: 5px solid #000;
    position: relative;
    overflow: hidden;
    box-shadow: 15px 15px 0 rgba(0, 0, 0, 0.605);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .brutal-subscribe__container:hover {
    transform: translate(-5px, -5px);
    box-shadow: 20px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .brutal-subscribe__header {
    background-color: #000;
    color: #fff;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .brutal-subscribe__header::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      #ff0 0,
      #ff0 10px,
      #000 10px,
      #000 20px
    );
    opacity: 0.1;
    animation: stripe-animation 20s linear infinite;
  }

  @keyframes stripe-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .brutal-subscribe__title {
    display: block;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    text-shadow: 3px 3px 0 rgb(140, 140, 19);
  }

  .brutal-subscribe__subtitle {
    display: block;
    font-size: 14px;
    position: relative;
    z-index: 1;
  }

  .brutal-subscribe__form {
    padding: 20px;
  }

  .brutal-subscribe__input {
    width: calc(100% - 26px);
    padding: 10px;
    border: 3px solid #000;
    font-family: inherit;
    font-size: 16px;
    margin-bottom: 10px;
    transition: transform 0.3s, background-color 0.3s;
  }

  .brutal-subscribe__input:focus {
    outline: none;
    background-color: #ff0;
    transform: scale(1.05);
  }

  .brutal-subscribe__button {
    width: 60%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: 3px solid #000;
    font-family: inherit;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }

  .brutal-subscribe__button::after {
    content: "→";
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
    transition: right 0.3s;
  }

  .brutal-subscribe__button:hover {
    background-color: #ff0;
    color: #000;
  }

  .brutal-subscribe__button:hover::after {
    right: 10px;
  }

  .brutal-subscribe__button:active {
    transform: scale(0.95);
  }

  .brutal-subscribe__decor {
    position: absolute;
    bottom: -10px;
    right: -10px;
    background-color: #ff0;
    color: #000;
    padding: 5px 10px;
    transform: rotate(-5deg);
    font-weight: bold;
    font-size: 24px;
    border: 3px solid #000;
    transition: transform 0.3s;
  }

  .brutal-subscribe__container:hover .brutal-subscribe__decor {
    transform: rotate(3deg) scale(1);
  }

  @media (max-width: 500px) {
    .brutal-subscribe__container {
      width: 90%;
    }
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  .brutal-subscribe__container:hover .brutal-subscribe__title {
    animation: glitch 0.3s infinite;
  }
`;

export default App;
