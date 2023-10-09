import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavContainer = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1009px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 33px;
    position: absolute;
    top: 100%;
    background: #313552;
    padding: 200px 22px 15px 20px;
    border-right: 1px solid #c5c5c6;
    height: 100vh;
    left: -212px; /*pour cacher vers la gauche les li*/
    transition: 0.5s ease-out;
    ${({ $isOpen }) =>
      $isOpen &&
      `
      left: 0;
      z-index: 2;
    `}
  }
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
