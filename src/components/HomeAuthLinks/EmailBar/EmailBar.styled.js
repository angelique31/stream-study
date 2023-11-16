import styled from "styled-components";
import { StyledLink } from "../SignInButton/SignInButton.styled";

export const AuthFormContainer = styled.div`
  margin: auto;
  margin-top: 1.625rem;
  width: 100%;
  max-width: 36.625rem;
`;

export const EmailFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const EmailInput = styled.input`
  padding: 18px 10px;
  width: 50%;
  background: rgba(22, 22, 22, 0.7);
  border: 1px solid rgba(128, 128, 128, 0.7);
  border-radius: 0.25rem;
  color: white;
  font-size: 1.1rem;
  &::placeholder {
    color: #b8b8b7;
    font-size: 1rem;
    font-weight: 400;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const StyledLinkExtended = styled(StyledLink)`
  padding: 15px 24px;

  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @media (max-width: 780px) {
    font-size: 1.1rem;
    padding: 10px 16px;
  }
`;

export const ErrorMessage = styled.div`
  color: rgb(235, 57, 66);
  font-size: 0.9rem;
  margin-top: 5px;
  margin-left: -326px;
`;
