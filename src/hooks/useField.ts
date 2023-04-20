import { useState } from "react";

export function useField<T>(initialState: T) {
  const [inputValue, setInputValue] = useState<T>(initialState);

  const onChangeHandler = ({ target }: { target: HTMLInputElement }) => {
    setInputValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return { values: inputValue, onChangeHandler };
}
