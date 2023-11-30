import styled from "styled-components";

export const UnderlineLink = styled.a`
  text-decoration: none;
`;

export const StyledLink = styled.div`
  color: rgb(229, 9, 20);
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;
