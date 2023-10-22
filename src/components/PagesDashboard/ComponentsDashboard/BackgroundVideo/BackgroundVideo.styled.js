// import styled from "styled-components";

// export const StyledBackgroundVideo = styled.video`
//   position: fixed;
//   top: 0;
//   left: 0;
//   min-width: 100%;
//   min-height: 100%;
//   z-index: -1;

//   }
// `;

// export const TitleContainer = styled.div`
//   margin: 250px 0 250px 100px;
// `;

// export const VideoTitle = styled.h1`
//   color: white;
//   font-size: 3rem;
//   margin-bottom: 30px;
//   width: 540px;
// `;

import styled from "styled-components";

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const StyledBackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
  pointer-events: none;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  margin: 250px 0 250px 100px;
  @media (max-width: 670px) {
    margin: 250px 0 250px 10px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const VideoTitle = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 30px;
  width: 540px;
  @media (max-width: 670px) {
    font-size: 2rem;
    width: 340px;
  }
`;
