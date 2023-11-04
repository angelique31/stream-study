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

  // Action pour la suppression de la série
  const removeSerie = (serieId) => {
    dispatch(removeFromList(serieId));
  };

  // Action pour afficher la notification
  const showSerieNotification = (serie) => {
    dispatch(showNotificationModal(serie));

    // Planifier le masquage de la notification
    scheduleHideNotification();
  };

  // Fonction pour planifier le masquage de la notification
  const scheduleHideNotification = () => {
    setTimeout(() => {
      dispatch(hideNotificationModal());
    }, 5000);
  };

  // La fonction principale qui coordonne la suppression de la série et l'affichage de la notification
  const handleRemoveSerie = (serie) => {
    removeSerie(serie.id);
    showSerieNotification(serie);
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
