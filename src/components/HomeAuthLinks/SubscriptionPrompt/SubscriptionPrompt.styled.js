import styled from "styled-components";

export const SubscriptionContainer = styled.div`
  margin: 40px 53px;
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
