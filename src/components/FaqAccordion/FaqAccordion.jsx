import React, { useState } from "react";
import Image from "next/image";

import { accordionData } from "./data";

import {
  AccordionContainer,
  StyledH2,
  AccordionOuterWrapper,
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
  AccordionContentText,
  PlusIconContainer,
  CrossIcon,
} from "./FaqAccordion.styled";

import PlusIcon from "../../assets/icons/plus.svg";
import SubscriptionPrompt from "../HomeAuthLinks/SubscriptionPrompt/SubscriptionPrompt";

const FAQAccordion = () => {
  const [openedItem, setOpenedItem] = useState(-1);

  const toggleItem = (index) => {
    if (openedItem === index) {
      setOpenedItem(-1);
    } else {
      setOpenedItem(index);
    }
  };

  return (
    <AccordionContainer>
      <StyledH2>Foire aux questions</StyledH2>
      <AccordionOuterWrapper>
        {accordionData.map((item, index) => (
          <AccordionWrapper key={index}>
            <AccordionHeader onClick={() => toggleItem(index)}>
              {item.title}
              {openedItem === index ? (
                <CrossIcon>
                  <Image src={PlusIcon} alt="cross Icon" />
                </CrossIcon>
              ) : (
                <PlusIconContainer>
                  <Image src={PlusIcon} alt="Plus Icon" />
                </PlusIconContainer>
              )}
            </AccordionHeader>
            {openedItem === index && (
              <AccordionContent>
                <AccordionContentText>{item.mainContent}</AccordionContentText>
                <br />
                {item.secondaryContent}
              </AccordionContent>
            )}
          </AccordionWrapper>
        ))}
      </AccordionOuterWrapper>
      <SubscriptionPrompt />
    </AccordionContainer>
  );
};

export default FAQAccordion;
