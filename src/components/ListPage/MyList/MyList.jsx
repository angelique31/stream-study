import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SerieCard from "../../SerieCard/SerieCard";
import { openModal } from "@/store/actions/modalActions";

const MyListPage = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.tooltip.myList);

  const handleOpenModal = (videoId, overview, posterPath) => {
    dispatch(openModal(videoId, overview, posterPath));
  };

  return (
    <div>
      <ul>
        {myList.map((serie, index) => (
          // <SerieCard key={index} serie={serie} onOpenModal={handleOpenModal} />
          <SerieCard
            key={index}
            serie={serie}
            onOpenModal={handleOpenModal}
            isInMyListPage={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyListPage;
