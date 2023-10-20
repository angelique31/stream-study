import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  // @media (max-width: 684px) {
  //   flex-direction: column;
  // }
`;

export const NavContainer = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1071px) {
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
    display: none;
    ${({ $isOpen }) =>
      $isOpen &&
      `
      left: 0;
      z-index: 2;
      display: block;
    `}
  }
`;

export const StyledLink = styled.div`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #e50914;
  }
`;

//div qui est dans /pages/dashboard/home.js :
export const MenuAndSearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
