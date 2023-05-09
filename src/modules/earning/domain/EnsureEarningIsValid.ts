import { Earning, ValidationResult } from "../../../types";

const validResult = {
  isValid: true,
  message: "",
};

export const ensureEarningIsValid = (earning: Earning): ValidationResult => {
  // Check total
  const checkTotal = checkTotalIsValid(earning.total);
  if (!checkTotal.isValid) return checkTotal;

  //   Check name
  const checkName = checkIfNameDoNotEmpty(earning.name);
  if (!checkName.isValid) return checkName;

  return validResult;
};

const checkIfNameDoNotEmpty = (name: string): ValidationResult => {
  if (name.length <= 5)
    return { isValid: false, message: "Name must be 5 characters or more" };

  return validResult;
};

const checkTotalIsValid = (total: number): ValidationResult => {
  if (isNaN(total))
    return { isValid: false, message: "The total must be a number" };

  if (total === undefined || total === null)
    return { isValid: false, message: "You must enter an amount of money" };

  if (total === 0)
    return {
      isValid: false,
      message: "The amount of your profit cannot be zero.",
    };

  return validResult;
};
