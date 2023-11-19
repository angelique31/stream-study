// import styled, { keyframes } from "styled-components";

// const fadeIn = keyframes`
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// `;

// const fadeOut = keyframes`
//   0% { opacity: 1; }
//   100% { opacity: 0; }
// `;

// const flash = keyframes`
//   0% {
//     color: rgb(145, 52, 52);
//     text-shadow: 0 0 2px rgba(255, 1, 1, 1);
//   }
//   90% {
//     color: rgba(255, 1, 1, 1);
//     text-shadow: none;
//   }
//   100% {
//     color: rgb(145, 52, 52);
//     text-shadow: 0 0 7px rgba(255, 1, 1, 1);
//   }
// `;

// export const LoaderContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   opacity: 1;
//   animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1s;
//   animation-fill-mode: forwards;
// `;

// export const StyledLoader = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Letter = styled.span`
//   font-size: 80px;
//   font-family: "Roboto", sans-serif;
//   letter-spacing: 15px;
//   margin-bottom: 150px;
//   animation: ${flash} 1.2s linear infinite;
//   &:nth-child(1) {
//     animation-delay: 0.1s;
//   }
//   &:nth-child(2) {
//     animation-delay: 0.2s;
//   }
//   &:nth-child(3) {
//     animation-delay: 0.3s;
//   }
//   &:nth-child(4) {
//     animation-delay: 0.4s;
//   }
//   &:nth-child(5) {
//     animation-delay: 0.5s;
//   }
//   &:nth-child(6) {
//     animation-delay: 0.6s;
//   }
//   &:nth-child(7) {
//     animation-delay: 0.7s;
//   }
// `;

import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;
