import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restoreSerie } from "../../../store/actions/tooltipActions";
import { hideNotificationModal } from "../../../store/actions/notificationModaleActions";
import Image from "next/image";
import ArrowIcon from "../../../assets/logos/annuler-la-fleche.png";
import {
  Overlay,
  ModalContent,
  ModalTitle,
  UndoSection,
  UndoText,
} from "./NotificationModale.styled";

const NotificationModal = ({ serieName, onUndo }) => {
  const dispatch = useDispatch();
  const removedSerie = useSelector(
    (state) => state.notificationModal.removedSerie
  );

  const handleUndo = () => {
    // Restaurer la série à la liste
    dispatch(restoreSerie(removedSerie));

    // Masquer la modale après avoir restauré la série
    dispatch(hideNotificationModal());
  };

  return (
    <Overlay>
      <ModalContent>
        <ModalTitle>
          {removedSerie?.name || ""} a été supprimé de ma liste
        </ModalTitle>
        <UndoSection>
          <Image src={ArrowIcon} width={15} height={15} alt="Annuler" />
          <UndoText onClick={handleUndo}>Annuler</UndoText>
        </UndoSection>
      </ModalContent>
    </Overlay>
  );
};

export default NotificationModal;
