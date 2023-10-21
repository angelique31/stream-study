import styled from "styled-components";

export const UnderlineLink = styled.a`
  text-decoration: none;
`;

export const StyledLink = styled.div`
  color: rgb(229, 9, 20);
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  @media (max-width: 1071px) {
    font-size: 2rem;
    margin-left: 90px;
  }
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;
