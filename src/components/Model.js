import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";

const Model = () => {
  const { scene } = useGLTF("/models/nike.glb");
  const ref = useRef();

  // Subtle rotation animation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Slow rotation on Y-axis
    }
  });

  // Dynamic scaling
  const isMobile = window.innerWidth <= 768;
  const scale = isMobile ? [19, 19, 19] : [20, 20, 20];

  return <primitive ref={ref} object={scene} scale={scale} />;
};

const ThreeDViewerSection = () => {
  return (
    <SectionWrapper>
      {/* Left Section: Heading and Description */}
      <Content>
        <Title>
          Explore the <i>NIKE</i> Revolution
        </Title>
        <Description>
          <i>DISCOVER THE GROUNDBREAKING DESIGN OF NIKE'S ICONIC SHOES.</i>
        </Description>
      </Content>

      {/* Right Section: 3D Viewer */}
      <ViewerContainer>
        <Canvas style={{ background: "transparent" }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </ViewerContainer>
    </SectionWrapper>
  );
};

export default ThreeDViewerSection;

/* Styled Components */
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #f5f5f5;
  height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    height: auto;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 50%; /* Limit the text area to half the screen */
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: "Anton", sans-serif;
  font-size: 4rem;
  margin-bottom: 20px;

  i {
    color: #b22222;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  color: #666;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ViewerContainer = styled.div`
  flex: 1;
  max-width: 50%; /* Limit the 3D viewer area to half the screen */
  height: auto;
  aspect-ratio: 1; /* Maintain a square aspect ratio for the 3D canvas */

  canvas {
    width: 100%;
    height: 100%;
    pointer-events: none;

    &:hover {
      pointer-events: auto;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 400px; /* Adjusted size for tablets */
  }

  @media (max-width: 768px) {
    height: 300px; /* Adjusted size for mobile */
    width: 100%;
  }
`;
