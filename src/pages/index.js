import Head from "next/head";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import SignInButton from "@/components/HomeAuthLinks/SignInButton/SignInButton";

import {
  LandingContainer,
  LogoNavigation,
  ButtonContainer,
  ContentContainer,
  MainTitle,
  Subtitle,
} from "../components/HomeAuthLinks/landingPage.styled";
import DropdownButton from "@/components/HomeAuthLinks/DropdownButton/DropdownButton";
import RichBanner from "@/components/RichBanner/RichBanner";
import WatchOnTv from "@/components/WatchOnTv/WatchOnTv";
import WatchOnDevice from "@/components/WatchOnDevice/WatchOnDevice";
import AnimationKids from "@/components/AnimationKids/AnimationKids";
import DownloadSeries from "@/components/DownloadSeries/DownloadSeries";
import FAQAccordion from "@/components/FaqAccordion/FaqAccordion";
import SubscriptionPrompt from "@/components/HomeAuthLinks/SubscriptionPrompt/SubscriptionPrompt";
import Footer from "@/components/Footer/Footer";

function landingPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="description"
          content="Clone de Netflix créé par Angélique Rosin comme projet de démonstration des compétences en développement web utilisant Next.js"
        />
        <title>Study Netifly</title>
      </Head>
      <LandingContainer>
        <LogoNavigation>
          <LogoLink />
          <ButtonContainer>
            <DropdownButton />
            <SignInButton />
          </ButtonContainer>
        </LogoNavigation>
        <ContentContainer>
          <MainTitle>Films et séries en illimité, et bien plus</MainTitle>
          <Subtitle>Où que vous soyez. Annulez à tout moment.</Subtitle>

          <SubscriptionPrompt />
        </ContentContainer>
      </LandingContainer>
      <RichBanner />
      <WatchOnTv />
      <WatchOnDevice />
      <AnimationKids />
      <DownloadSeries />
      <FAQAccordion />
      <Footer />
    </>
  );
}

export default landingPage;
