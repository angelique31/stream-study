import styled from "styled-components";

export const InfoButton = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8); // Assombrir le fond au survol
  }

  & > i {
    margin-right: 10px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(109, 109, 110, 0.7);
    text-align: center;
    line-height: 20px;
    font-style: normal; // Dans ce cas, "i" est juste un conteneur, pas une vraie balise <i>
  }
`;
