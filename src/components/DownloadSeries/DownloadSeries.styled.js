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

export const MobilePictureContainer = styled.div`
  width: 100%;
  //   width: 450px;
  //   height: 350px;
`;
export const PictureBoxShot = styled.div`
  width: 100%;
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
  left: 103px;
  bottom: 18px;
  width: 50%;
  height: 89px;
`;

export const StyledH3 = styled.h3`
  font-size: 1rem;
  color: white;
`;

export const StyledSpan = styled.span`
  color: #0071eb;
  font-size: 0.8rem;
`;

export const StyledDownloadTitle = styled.div`
  margin-left: 10px;
`;
