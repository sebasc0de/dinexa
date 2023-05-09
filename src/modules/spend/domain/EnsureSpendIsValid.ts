import { Spend, ValidationResult } from "../../../types";

const validResult = {
  isValid: true,
  msg: "",
};

export const ensureSpendIsValid = (spend: Spend): ValidationResult => {
  // Check total
  const checkTotal = checkIfTotalIsValid(spend.total);
  if (!checkTotal.isValid) return checkTotal;

  //   Check name
  const checkName = checkIfNameDoNotEmpty(spend.name);
  if (!checkName.isValid) return checkName;

  return validResult;
};

// Check name
const checkIfNameDoNotEmpty = (name: string): ValidationResult => {
  if (name.length <= 5)
    return { isValid: false, msg: "Name must be 5 characters or more" };

  return validResult;
};

// Check total
const checkIfTotalIsValid = (total: number): ValidationResult => {
  if (isNaN(total))
    return { isValid: false, msg: "The total must be a number" };

  if (total === undefined || total === null)
    return { isValid: false, msg: "You must enter an amount of money" };

  if (total === 0)
    return {
      isValid: false,
      msg: "The amount of your spend cannot be zero.",
    };

  return validResult;
};
