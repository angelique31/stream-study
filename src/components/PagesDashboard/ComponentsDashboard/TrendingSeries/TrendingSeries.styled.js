import styled from "styled-components";

export const TrendingContainer = styled.div``;

export const TrendingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const TrendingList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  position: relative;
`;

export const TrendingItem = styled.li`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  width: 250px;
  min-height: 150px;
  &:hover {
    transform: scale(1.05);
  }

  &:hover .action-buttons {
    opacity: 1;
  }
`;

export const ActionButtons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${TrendingItem}:hover & {
    opacity: 1;
  }
`;

export const ImageWrapper = styled.div`
  // width: 50%;
  // height: 300px;
`;

export const OverviewWrapper = styled.div`
  opacity: 0; // caché par défaut
  transition: opacity 0.3s ease;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  // ${TrendingItem}:hover & {
  //   opacity: 1;
  //   max-height: 300px;
  //   width: 500px;
  // }

  ${TrendingItem}:hover &,
${TrendingItem}:focus & {
    opacity: 1;
    max-height: 300px;
    width: 250px;
    background-color: #181818;
    color: white;
  }
`;
