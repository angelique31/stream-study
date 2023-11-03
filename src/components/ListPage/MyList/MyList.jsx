import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SerieCard from "../../SerieCard/SerieCard";
import { openModal } from "@/store/actions/modalActions";
import {
  showNotificationModal,
  hideNotificationModal,
} from "../../../store/actions/notificationModaleActions";
import { removeFromList } from "@/store/actions/tooltipActions";
import NotificationModal from "../NotificationModale/NotificationModale";
import { SeriesListContainer } from "./MyList.styled";

const MyListPage = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.tooltip.myList);
  const { isVisible } = useSelector((state) => state.notificationModal);

  //modale de la video
  const handleOpenModal = (videoId, overview, posterPath) => {
    dispatch(openModal(videoId, overview, posterPath));
  };

  const handleRemoveSerie = (serie) => {
    // Supprimer la série de la liste
    dispatch(removeFromList(serie.id));

    // Afficher la modale avec l'information de la série supprimée
    dispatch(showNotificationModal(serie));

    // Masquer la modale après 5 secondes
    // setTimeout(() => {
    //   dispatch(hideNotificationModal());
    // }, 5000);
  };

  return (
    <div>
      {isVisible && <NotificationModal />}
      <SeriesListContainer>
        {myList.map((serie, index) => (
          <SerieCard
            key={index}
            serie={serie}
            onOpenModal={handleOpenModal}
            isInMyListPage={true}
            onRemoveSerie={handleRemoveSerie}
          />
        ))}
      </SeriesListContainer>
    </div>
  );
};

export default MyListPage;
