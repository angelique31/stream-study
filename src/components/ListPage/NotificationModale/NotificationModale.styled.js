import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  width: 70%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.p`
  margin: 0;
  font-size: 1.2em;
`;

export const UndoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UndoText = styled.span`
  font-size: 1em;
  color: black;
  cursor: pointer;
  margin-left: 10px;
`;
