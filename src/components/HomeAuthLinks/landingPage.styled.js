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

  padding: 20px 50px 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ContentContainer = styled.div`
  margin: 108px 53px;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: white;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
`;

export const StyledParagraph = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
`;
