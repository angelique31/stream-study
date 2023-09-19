import styled from "styled-components";

export const LandingContainer = styled.div`
  height: 600px;
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
  padding: 20px 2rem;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 900px) {
    gap: 10px;
  }
`;

export const ContentContainer = styled.div`
  margin: 90px 53px;
  text-align: center;
  @media (max-width: 900px) {
    margin: 83px 53px;
  }
  @media (max-width: 600px) {
    margin: 51px 53px;
  }
  @media (max-width: 450px) {
    margin: 56px 10px;
  }
  @media (max-width: 400px) {
    margin: 35px 10px;
  }
  @media (max-width: 367px) {
    margin: 49px 10px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3.3rem;
  font-weight: 900;
  color: white;
  @media (max-width: 900px) {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  margin: 1rem 0 0;
  @media (max-width: 900px) {
    font-size: 1.125rem;
  }
`;

export const CenteredContentContainer = styled.div`
  padding: 0 2rem;
  width: 80%;
  margin: auto;
  @media (max-width: 750px) {
    padding: 0;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  margin: 1.5rem 0 0;
  @media (max-width: 900px) {
    font-size: 1.125rem;
  }
`;
