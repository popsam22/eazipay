import { isValidPhoneNumber } from "libphonenumber-js/max";

// validates phone number in international format (e.g., "+234 811 987 6543")
export const validatePhoneNumber = (phone: string): boolean => {
  if (!phone) return false;
  try {
    return isValidPhoneNumber(phone);
  } catch {
    return false;
  }
};
