import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.97);
`;

export const ConfirmationBox = styled.div`
  background-color: rgb(43, 184, 113);
  color: rgb(0, 0, 0);
  font-size: 1rem;
  font-weight: 400;
  padding: 20px;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Icon = styled.span`
  color: rgb(43, 184, 113);
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export const ConfirmationPageContainer = styled.h1`
  padding-top: 50px;
  text-align: center;
  height: 600px;
  background: #f3f3f3;
`;

export const ConfirmationMessage = styled.div`
  display: inline-block;
  width: 100%;
  color: #155724;
  border-color: #c3e6cb;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 1.25rem;
  margin-top: 20px;
`;

export const AccountTitle = styled.div`
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: left;
  padding: 20px;
  font-weight: 400;
`;
