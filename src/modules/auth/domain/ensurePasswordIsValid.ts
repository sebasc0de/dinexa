import { ValidationResult } from "../../../types";

export const ensurePasswordIsValid = (
  password: string,
  confirmPassword: string
): ValidationResult => {
  // Check password length
  const lengthResult = checkPasswordLength(password);
  if (!lengthResult.isValid) return lengthResult;

  // Check password match
  const matchResult = checkPasswordMatch(password, confirmPassword);
  if (!matchResult.isValid) return matchResult;

  return { isValid: true, message: "" };
};

const checkPasswordLength = (password: string): ValidationResult => {
  if (password.length < 8)
    return {
      isValid: false,
      message: "The password must be at least 8 characters long.",
    };

  return { isValid: true, message: "" };
};

const checkPasswordMatch = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword)
    return { isValid: false, message: "Passwords do not match" };

  return { isValid: true, message: "" };
};
