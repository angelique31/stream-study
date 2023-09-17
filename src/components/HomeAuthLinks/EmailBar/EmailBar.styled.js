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
`;

export const StyledLinkExtended = styled(StyledLink)`
  padding: 15px 24px;
  width: 33%;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  gap: 5px;
`;
