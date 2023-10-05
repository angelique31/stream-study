import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 50%;
  height: 600px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 400px;
`;

export const Overview = styled.p`
  font-size: 16px;
  background-color: black;
  color: white;
  height: auto;
  padding: 20px 30px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 28px;
  background: black;
  font-size: 40px;
  cursor: pointer;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
