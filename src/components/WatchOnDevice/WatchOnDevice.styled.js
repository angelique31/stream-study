import styled from "styled-components";

export const ContentDevice = styled.div`
  margin-left: 20px;
  @media (max-width: 950px) {
    text-align: center;
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
    flex-direction: column-reverse;
  }
`;
