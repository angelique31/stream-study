import styled from "styled-components";

export const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 150px;
  @media (max-width: 1250px) {
    margin: 0 50px;
  }
  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  @media (max-width: 600px) {
    position: static;
  }
`;

export const MobilePictureContainer = styled.div`
  width: 100%;
  // width: 450px;
  // @media (max-width: 600px) {
  //   width: 350px;
  // }
`;
export const PictureBoxShot = styled.div`
  // width: 100%;
  width: 80px;
  @media (max-width: 600px) {
    width: 45px;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  border: 2px solid rgba(128, 128, 128, 0.7);
  box-shadow: 0 0 2em 0 rgb(0, 0, 0);
  border-radius: 0.75rem;
  background: rgb(0, 0, 0);
  z-index: 1;
  position: absolute;
  left: 126px;
  bottom: 29px;
  width: 50%;
  height: 89px;
  @media (max-width: 570px) {
    left: 60px;
    bottom: 7px;
    width: 70%;
  }
  @media (max-width: 460px) {
    left: 47px;
    bottom: 0;
    height: 70px;
    width: 70%;
  }
  @media (max-width: 370px) {
    left: 25px;
    bottom: 0;
    height: 70px;
    width: 79%;
  }
`;

export const StyledH3 = styled.h3`
  font-size: 0.9rem;
  color: white;
  @media (max-width: 370px) {
    font-size: 0.8rem;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  width: 70%;

  color: #0071eb;
  font-size: 0.8rem;
  @media (max-width: 370px) {
    font-size: 0.5rem;
  }
`;

export const StyledDownloadTitle = styled.div`
  margin-left: 15px;
`;
