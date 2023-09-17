import styled from "styled-components";

export const LandingContainer = styled.div`
  height: 100vh; // Pour prendre toute la hauteur de la fenêtre
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("/assets/landingPage/picture-landingPage.jpg");
`;

export const LogoNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
