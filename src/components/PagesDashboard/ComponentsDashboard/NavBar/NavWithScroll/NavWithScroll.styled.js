import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  position: fixed;
  top: 0;
  padding-left: 100px;
  background: ${({ isScrolled }) => (isScrolled ? "black" : "transparent")};
  width: ${({ isScrolled }) => (isScrolled ? "100%" : "auto")};
  @media (max-width: 1238px) {
    gap: 20px;
    padding-left: 50px;
  }
`;

export const MenuAndSearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
