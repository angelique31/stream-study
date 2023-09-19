import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4.5rem 0;
  background: #000000;
}
`;

export const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 150px;
  @media (max-width: 1250px) {
    margin: 0 50px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-right: 20px;
  @media (max-width: 950px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: white;
  @media (max-width: 950px) {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  @media (max-width: 950px) {
    margin: 1rem 0 0;
    font-size: 1.125rem;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
`;

export const StyledImageContainer = styled.div`
  z-index: 2;
  position: relative;
  width: 500px;
  @media (max-width: 570px) {
    width: 400px;
  }
  @media (max-width: 460px) {
    width: 300px;
  }
  @media (max-width: 370px) {
    width: 250px;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 73%;
  max-height: 54%;
  overflow: hidden;
  top: 20%;
  left: 13%;
  video {
    width: 100%;
    height: 100%;
  }
`;
