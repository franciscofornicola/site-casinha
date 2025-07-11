'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import stoveAnimation from '../../../public/assets/stove-animation.json';
import styled from 'styled-components';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PreloaderContent = styled.div`
  text-align: center;
`;

const PreloaderAnimation = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
`;

const PreloaderText = styled.p`
  font-size: 1.5rem;
  color: var(--primary);
  font-family: 'Playfair Display', serif;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: var(--accent);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${props => props.progress}%;
  background-color: var(--primary);
  transition: width 0.3s ease;
`;

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <PreloaderContainer>
      <PreloaderContent>
        <PreloaderAnimation>
          <Lottie animationData={stoveAnimation} loop={true} />
        </PreloaderAnimation>
        <PreloaderText>Carregando...</PreloaderText>
        <ProgressBar>
          <ProgressBarFill progress={progress} />
        </ProgressBar>
      </PreloaderContent>
    </PreloaderContainer>
  );
} 