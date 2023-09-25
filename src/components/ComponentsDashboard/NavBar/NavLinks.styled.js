import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
`;

export const NavContainer = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled.div`
  margin: 0 1rem;
  color: black;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #e50914;
  }
`;
