import styled from "styled-components";

export const StyledLink = styled.a`
  /* Vos styles de base pour les liens */
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownMenu} {
    display: block;
  }
`;

export const DropdownToggle = styled(StyledLink)`
  cursor: pointer;
  span {
    display: inline-block;
    transition: transform 0.3s;
  }
  &:hover {
    span {
      transform: rotate(180deg); // Ceci fait pivoter la flèche
    }
  }
`;
