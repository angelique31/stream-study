import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4.5rem 0;
  background: #000000;
`;

export const AccordionWrapper = styled.div`
  width: 40%;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  cursor: pointer;
  border: 1px solid #444;
`;

export const AccordionContent = styled.div`
  background-color: #222;
  color: white;
  padding: 1rem;
  border: 1px solid #444;
  border-top: none;
  height: 200px;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const PlusIconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const CrossIcon = styled.div`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
`;
