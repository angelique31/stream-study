import React from "react";
import { useSelector } from "react-redux";

import Image from "next/image";
import ArrowIcon from "../../../assets/logos/annuler-la-fleche.png";
import {
  Overlay,
  ModalContent,
  ModalTitle,
  UndoSection,
  ArrowImage,
  UndoText,
} from "./NotificationModale.styled";

const NotificationModal = ({ serieName, onUndo }) => {
  const removedSerie = useSelector(
    (state) => state.notificationModal.removedSerie
  );

  return (
    <Overlay>
      <ModalContent>
        <ModalTitle>
          {removedSerie?.name || ""} a été supprimé de la liste
        </ModalTitle>
        <UndoSection>
          <ArrowImage src={ArrowIcon} alt="Annuler" />
          <UndoText onClick={onUndo}>Annuler</UndoText>
        </UndoSection>
      </ModalContent>
    </Overlay>
  );
};

export default NotificationModal;
