import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 96px;
  height: 96px;
  position: relative; // Nécessaire pour le positionnement correct de l'image Next.js
`;

export const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  background: radial-gradient(
    51.39% 511.66% at 47.68% -217.91%,
    #ff9900 0%,
    #e50914 17.27%,
    #0e1b4f 79.44%,
    #000413 100%
  );
  box-shadow: 0px -8px 25px rgba(0, 0, 0, 0.5);
`;

export const BannerContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

export const TextContentWrapper = styled.div`
  padding-left: 32px;
`;

export const StyledParagraph = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin: 0;
`;

export const StyledParagraphSecondary = styled(StyledParagraph)`
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledLink = styled.div`
  cursor: pointer;
  color: #448ef4;
  font-weight: 500;
  text-decoration: underline;
`;
