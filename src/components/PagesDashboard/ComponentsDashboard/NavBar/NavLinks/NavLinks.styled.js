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

export const NavContainer = styled.ul`
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
    background: #1d1b1b;
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

export const StyledNavItem = styled.li`
  color: white;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #ffb957;
    &::after {
      width: 100%;
    }
  }
  @media (max-width: 1009px) {
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: none; /* Par défaut, il sera caché */

  ${({ $isOpen }) =>
    $isOpen &&
    `
    display: block;
    
  `}
`;

//div qui est dans /pages/dashboard/home.js :
export const MenuAndSearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
