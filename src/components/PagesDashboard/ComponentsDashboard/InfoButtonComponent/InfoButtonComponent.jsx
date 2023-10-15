import React from "react";

import { InfoButton } from "./InfoButtonComponent.styled";

import IconInfo from "../../../../assets/icons/IconInfo/iconInfo";

function InfoButtonComponent() {
  return (
    <InfoButton>
      <IconInfo />

      <p>{`Plus d'infos`}</p>
    </InfoButton>
  );
}
export default InfoButtonComponent;
