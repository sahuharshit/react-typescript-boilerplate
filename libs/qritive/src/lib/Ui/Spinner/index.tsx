import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

export const Spinner: React.FC = () => {
  return (
    <Wrapper>
      <SpinnerUI data-testid="spinner">
        <div />
        <div />
        <div />
        <div />
      </SpinnerUI>
    </Wrapper>
  );
};

const Ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.6);
`;

export const SpinnerUI = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid green;
    border-radius: 50%;
    animation-name: ${Ring};
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-iteration-count: infinite;
    border-color: ${theme.primary.main} transparent transparent
      transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
