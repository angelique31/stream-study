import { useState } from "react";

function useFormErrors(initialState) {
  const [errors, setErrors] = useState(initialState);

  function setFieldError(fieldName, message) {
    setErrors({ ...errors, [fieldName]: message });
  }

  return { errors, setFieldError };
}

export default useFormErrors;
