import styled from "styled-components";

export const StyledLink = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 9px 16px;
  border-radius: 0.25rem;
  background-color: rgb(229, 9, 20);
  transition: 0.3s ease;
  &:hover {
    background: rgb(193, 17, 25);
  }
  @media (max-width: 450px) {
    padding: 9px 10px;
  }
`;
