import styled from "styled-components";

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const TrendingList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   list-style: none;
// `;

export const TrendingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(450px, 1fr)
  ); /* 450px correspond à la largeur de votre image et vidéo */
  gap: 16px;
`;

export const TrendingItem = styled.li`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  width: 450px;
  min-height: 350px;
  //   &:hover {
  //     transform: scale(1.05);
  //   }

  &:hover .action-buttons {
    opacity: 1;
  }
`;

export const TrendingTitle = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 8px;
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
  position: relative; /* pour que le titre reste au-dessus */
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
    width: 500px;
  }
`;
