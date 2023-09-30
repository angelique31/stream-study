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
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  margin: 5px;
  position: relative;
  overflow: hidden; // Pour garantir que l'icône ne déborde pas du cercle
  .arrow-down-icon {
    transform: rotate(90deg);
  }
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

export const TitleOverlay = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 2;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  // width: 50%;
  // height: 300px;
  position: relative;

  .cover {
    object-fit: cover;
  }
`;

export const OverviewWrapper = styled.div`
  opacity: 0; // caché par défaut
  transition: opacity 0.3s ease;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  // ${TrendingItem}:hover & {
  //   opacity: 1;

  // }

  ${TrendingItem}:hover &,
${TrendingItem}:focus & {
    opacity: 1;
    max-height: 300px;
    height: 70px;
    width: 250px;
    background-color: #181818;
    color: white;
    border-radius: 0 0 5px 5px;
  }
`;
