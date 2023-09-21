import styled from "styled-components";

export const StyledH2 = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const AccordionContainer = styled.div`
  align-items: center;
  padding: 4.5rem 0;
  background: #000000;
`;

export const AccordionOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 150px;
`;

export const AccordionWrapper = styled.div`
  width: 100%;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #2d2d2d;
  color: white;
  cursor: pointer;
  border: 1px solid #444;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const AccordionContent = styled.div`
  background-color: #2d2d2d;
  color: white;
  padding: 1rem;
  border: 1px solid #444;
  border-top: none;
  height: auto;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: -0.4rem;
  margin-bottom: 0.5rem;
  transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  max-height: 75rem;
`;

export const AccordionContentText = styled.p`
  color: white;
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
