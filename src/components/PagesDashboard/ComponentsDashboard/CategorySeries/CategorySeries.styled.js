import styled from "styled-components";

export const TrendingContainer = styled.div`
  background-color: #1d1b1b;
  padding-top: ${(props) => (props.noPaddingTop ? "0" : "20px")};
  @media (max-width: 600px) {
    padding-top: 10px;
  }
`;

export const SeriesTitle = styled.h2`
  color: #e5e5e5;
  padding-left: 100px;
  font-size: 1rem;
  margin-bottom: -10px;
  background-color: ${(props) => (props.noPadding ? "transparent" : "#1d1b1b")};

  @media (max-width: 600px) {
    margin-left: 0px;
    margin-bottom: 0px;
    color: #b8b8b7;
    padding-top: 60px;
    background-color: black;
  }
`;

export const ArrowContainer = styled.div`
  position: relative;
  margin: auto;

  padding-bottom: 20px;
`;

export const TrendingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  position: relative;
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
  min-height: calc(150px + 70px);
  &:hover {
    transform: scale(1.05);
  }

  &:hover .action-buttons {
    opacity: 1;
  }
  @media (max-width: 600px) {
    min-height: 0;
  }
`;

export const TrendingContent = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
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

  @media (max-width: 700px) {
    // opacity: 1;
    display: none;
  }
`;

export const NoVideoText = styled.div`
  position: absolute;
  top: 70px;
  left: 119px;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  position: relative;
  width: 100%;
  .cover {
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const OverviewWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 250px;
  background-color: #181818;
  color: white;
  border-radius: 0 0 5px 5px;
  visibility: hidden; // caché par défaut
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${TrendingItem}:hover &,
  ${TrendingItem}:focus & {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e6e6e6;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;

  /* Ajout du triangle */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Position du triangle */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #e6e6e6;
  }
`;

export const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  scroll-behavior: smooth;
`;
