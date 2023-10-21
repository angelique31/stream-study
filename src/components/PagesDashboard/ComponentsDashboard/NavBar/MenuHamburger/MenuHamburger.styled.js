import styled from "styled-components";

export const StyledHamburger = styled.button`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: 20px;
  z-index: 10;
  background: transparent;
  left: 0;

  span {
    display: block;
    width: 100%;
    height: 2px;

    background: white;
    position: absolute;
    pointer-events: none;
    transition: opacity 0.3s 0.15s ease-out;
  }

  span:nth-child(1),
  span:nth-child(3) {
    transition: transform 0.3s ease-out;
  }

  span:nth-child(1) {
    transform: translateY(7px);
  }

  span:nth-child(3) {
    transform: translateY(-7px);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
  span:nth-child(1) {
    transform: translate(0) rotate(135deg);
  }
  
  span:nth-child(2) {
    opacity: 0;
    transition: opacity 0s ease-out;
  }
  
  span:nth-child(3) {
    transform: translate(0) rotate(-135deg);
  }
`}
  @media (min-width: 1071px) {
    display: none;
  }
`;
