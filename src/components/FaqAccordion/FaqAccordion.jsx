import React, { useState } from "react";
import Image from "next/image";

import {
  AccordionContainer,
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
  PlusIconContainer,
  CrossIcon,
} from "./FaqAccordion.styled";

import PlusIcon from "../../assets/icons/plus.svg";

const FAQAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionContainer>
      <AccordionWrapper>
        <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
          {`Netflix, qu'est-ce que c'est ?`}
          {/* {isOpen ? <CrossIcon /> : <PlusIcon />} */}
          {isOpen ? (
            <CrossIcon>
              <Image src={PlusIcon} alt="cross Icon" />
            </CrossIcon>
          ) : (
            <PlusIconContainer>
              <Image src={PlusIcon} alt="Plus Icon" />
            </PlusIconContainer>
          )}
        </AccordionHeader>
        {isOpen && (
          <AccordionContent>
            {`Netflix est un service de streaming qui propose une vaste sélection de
          séries TV, films, animes, documentaires et autres programmes primés
          sur des milliers d'appareils connectés à Internet.`}
          </AccordionContent>
        )}
      </AccordionWrapper>
    </AccordionContainer>
  );
};

export default FAQAccordion;
