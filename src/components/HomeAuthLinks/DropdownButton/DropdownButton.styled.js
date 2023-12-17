import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: rgba(22, 22, 22, 0.7);

  border: 1px solid rgba(128, 128, 128, 0.7);
  color: white;
  padding: 10px 26px 10px 15px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
  &::after {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 4px;
`;

export const DropdownItem = styled.a`
  color: black;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => (props.selected ? "#4c9fe7" : "white")};
  padding: 5px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #4c9fe7;
    cursor: pointer;
  }
`;
