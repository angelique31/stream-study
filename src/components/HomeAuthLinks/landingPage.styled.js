import styled from "styled-components";

export const LandingContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;

  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    url("/assets/landingPage/picture-landingPage.jpg");
`;

export const LogoNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
