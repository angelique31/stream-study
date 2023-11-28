import { useState } from "react";

const useForgotPasswordModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    toggleModal,
  };
};

export default useForgotPasswordModal;
