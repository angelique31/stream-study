import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  padding-top: 100px;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 50%;
  height: 600px;
  margin-top: 20px;
  border-radius: 10px;
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 400px;
`;

export const Overview = styled.p`
  font-size: 16px;
  background-color: black;
  color: white;
  height: auto;
  padding: 20px 30px;
  overflow-y: auto;
  max-height: 150px;
  // Styler la barre de défilement pour Chrome & Edge
  &::-webkit-scrollbar {
    width: 8px; // La largeur de la barre de défilement
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; // La couleur de la "thumb" ou le "curseur" de la barre de défilement
    border-radius: 4px; // Optionnel: pour rendre le curseur arrondi
  }

  &::-webkit-scrollbar-track {
    background-color: #444; // La couleur de la piste de la barre de défilement
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  z-index: 20;
  top: 30px;
  right: 28px;

  background: black;
  font-size: 40px;
  cursor: pointer;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const NoVideoText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  font-size: 2rem;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
