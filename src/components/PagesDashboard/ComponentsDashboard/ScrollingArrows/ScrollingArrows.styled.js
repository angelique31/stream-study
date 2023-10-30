import styled from "styled-components";

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2; // pour s'assurer qu'il apparaît au-dessus des autres éléments
  left: ${({ $left }) => ($left ? "0" : "auto")};
  right: ${({ $right }) => ($right ? "0" : "auto")};
  opacity: ${({ $opacityValue }) => ($opacityValue ? 1 : 0)};

  transition: opacity 0.3s ease-in-out;
`;
