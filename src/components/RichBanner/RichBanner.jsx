import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ImageContainer,
  BannerContentWrapper,
  OfferContainer,
  TextContentWrapper,
  StyledParagraph,
  StyledParagraphSecondary,
  StyledLinkWrapper,
  StyledLink,
} from "./RichBanner.styled";
import PopCorn from "../../assets/pop-corn.png";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const RichBanner = () => {
  return (
    <div>
      <OfferContainer>
        <BannerContentWrapper>
          <ImageContainer>
            <Image
              src={PopCorn}
              alt="picture pop corn"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
          <TextContentWrapper>
            <StyledParagraph>
              {" "}
              Le Netflix que vous aimez pour juste 5,99 €.{" "}
            </StyledParagraph>
            <StyledParagraphSecondary>{`Choisissez l'offre Standard avec pub.`}</StyledParagraphSecondary>

            <Link href="/auth/signup/signup-details" passHref>
              <StyledLinkWrapper>
                <StyledLink> En savoir plus </StyledLink>
                <Image src={ArrowRight} alt="arrow right" />
              </StyledLinkWrapper>
            </Link>
          </TextContentWrapper>
        </BannerContentWrapper>
      </OfferContainer>
    </div>
  );
};

export default RichBanner;
