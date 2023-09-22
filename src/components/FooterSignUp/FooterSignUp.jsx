import React from "react";

import footerSignUpData from "./footerSignUpData";

import {
  FooterWrapper,
  FooterContent,
  FooterParagraph,
  FooterGrid,
  FooterColumn,
  FooterLink,
} from "./FooterSignUp.styled";
import DropdownButton from "../HomeAuthLinks/DropdownButton/DropdownButton";

function FooterSignUp() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterParagraph>
          Des questions ? Appelez le (+33) 0000-00-00-00
        </FooterParagraph>
        <FooterGrid>
          {footerSignUpData.map((columnData, columnIndex) => (
            <FooterColumn key={columnIndex}>
              {columnData.map((item, itemIndex) => (
                <FooterLink key={itemIndex} href={item.link}>
                  {item.text}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}
        </FooterGrid>

        <DropdownButton />
      </FooterContent>
    </FooterWrapper>
  );
}

export default FooterSignUp;
