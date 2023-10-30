// import React from "react";
// import Image from "next/image";
// import {
//   ModalOverlay,
//   ModalContainer,
//   ModalCloseButton,
//   VideoFrame,
//   Overview,
//   ImageContainer,
//   NoVideoText,
// } from "./ModalVideo.styled";

// const ModalVideo = ({ videoId, overview, posterImage, onClose }) => {
//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContainer onClick={(e) => e.stopPropagation()}>
//         <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>

//         {videoId ? (
//           <VideoFrame
//             src={`https://www.youtube.com/embed/${videoId}`}
//             height={400}
//             allowFullScreen
//           />
//         ) : (
//           <ImageContainer>
//             <Image
//               className="cover"
//               src={posterImage}
//               alt={"images de films"}
//               layout="fill"
//               objectFit="cover"
//             />
//             <NoVideoText>
//               {`Oops ! Le film n'a pas encore sa bande-annonce. Pourquoi ne pas lire le résumé en attendant ?`}
//             </NoVideoText>
//           </ImageContainer>
//         )}

//         <Overview>{overview}</Overview>
//       </ModalContainer>
//     </ModalOverlay>
//   );
// };

// export default ModalVideo;

import React from "react";
import Image from "next/image";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
  VideoFrame,
  Overview,
  ImageContainer,
  NoVideoText,
} from "./ModalVideo.styled";

const ModalVideo = ({ videoId, overview, posterImage, onClose }) => {
  const isLocalImage = !posterImage.startsWith("https://image.tmdb.org");
  console.log(isLocalImage);
  const imageSrc = isLocalImage
    ? "/assets/boxshot.png"
    : `https://image.tmdb.org/t/p/w500${posterImage}`;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>

        {videoId ? (
          <VideoFrame
            src={`https://www.youtube.com/embed/${videoId}`}
            height={400}
            allowFullScreen
          />
        ) : (
          <ImageContainer>
            <Image
              className="cover"
              src={imageSrc}
              alt={"images de films"}
              layout="fill"
              objectFit="cover"
            />
            <NoVideoText>
              {`Oops ! Le film n'a pas encore sa bande-annonce. Pourquoi ne pas lire le résumé en attendant ?`}
            </NoVideoText>
          </ImageContainer>
        )}

        <Overview>{overview}</Overview>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalVideo;
