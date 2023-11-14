// hooks/usePasswordValidation.js
import { useState, useCallback } from "react";

const usePasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isValidPassword = useCallback(() => {
    return password.length >= 6;
  }, [password]);

  return {
    password,
    setPassword,
    showPasswordError,
    setShowPasswordError,
    formSubmitted,
    setFormSubmitted,
    isValidPassword: isValidPassword(),
  };
};

export default usePasswordValidation;
