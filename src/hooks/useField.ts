import { useState } from "react";

export function useField<T>(initialState = {}) {
  const [inputValue, setInputValue] = useState<T>(initialState as T);

  const onChangeHandler = (target: HTMLInputElement) => {
    setInputValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));

    console.log(inputValue);
  };

  return { inputValue, onChangeHandler };
}
