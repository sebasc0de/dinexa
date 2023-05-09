import { ChangeEvent, useState } from "react";

// Bootstrap form types
type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export function useField<T>(initialState: T) {
  const [inputValue, setInputValue] = useState<T>(initialState);

  const onChangeHandler = (event: ChangeEvent<FormControlElement>) => {
    const target = event.target as HTMLInputElement;

    setInputValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return { values: inputValue, onChangeHandler };
}
