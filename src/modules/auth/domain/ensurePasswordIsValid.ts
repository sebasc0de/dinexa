import { ValidationResult } from "../../../types";

const validResponse = {
  msg: "",
  isValid: true,
};

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

  return validResponse;
};

const checkPasswordLength = (password: string): ValidationResult => {
  if (password.length < 8)
    return {
      isValid: false,
      msg: "The password must be at least 8 characters long.",
    };

  return validResponse;
};

const checkPasswordMatch = (
  password: string,
  confirmPassword: string
): ValidationResult => {
  if (password !== confirmPassword)
    return { isValid: false, msg: "Passwords do not match" };

  return validResponse;
};
