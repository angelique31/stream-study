// import React from "react";
// import { LoaderContainer, StyledLoader, Letter } from "./Loader.styled";

// const Loader = () => {
//   return (
//     <LoaderContainer>
//       <StyledLoader>
//         <Letter>L</Letter>
//         <Letter>O</Letter>
//         <Letter>A</Letter>
//         <Letter>D</Letter>
//         <Letter>I</Letter>
//         <Letter>N</Letter>
//         <Letter>G</Letter>
//       </StyledLoader>
//     </LoaderContainer>
//   );
// };

// export default Loader;

// Loader.js
import React from "react";
import { LoaderContainer, Spinner } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
