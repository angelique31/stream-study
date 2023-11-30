import styled from "styled-components";

export const LandingContainer = styled.div`
  position: relative;
  height: 900px;
  background-size: cover;
  background-position: 150px;
  background-attachment: fixed;
  background-image: url("/assets/the-crown.jpg");
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: -136px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: #f3f3f3;
  padding: 40px;
  height: 300px;

  width: 90%;
  max-width: 450px;
  width: 450px;
  margin: auto;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Message = styled.p`
  margin-bottom: 20px;
`;

export const ContactLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
