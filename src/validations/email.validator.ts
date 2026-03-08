// RFC 5322 compliant email regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const validateEmail = (email: string | null | undefined): boolean => {
  if (!email) return false;

  const trimmedEmail = email.trim();

  if (trimmedEmail.length === 0) return false;
  if (trimmedEmail.length > 254) return false; // RFC 5321 max length

  if (!trimmedEmail.includes("@")) return false;

  // Split into local and domain parts
  const parts = trimmedEmail.split("@");
  if (parts.length !== 2) return false;

  const [localPart, domainPart] = parts;

  // Validate local part (before @)
  if (!localPart || localPart.length > 64) return false;

  // Validate domain part (after @)
  if (!domainPart || domainPart.length > 253) return false;

  // Must have at least one dot in domain
  if (!domainPart.includes(".")) return false;

  // TLD (top level domain) must be at least 2 characters
  const domainParts = domainPart.trim().split(".");
  const tld = domainParts.at(-1);

  if (!tld || !/^[a-z]{2,}$/i.test(tld)) return false;

  // Final regex validation
  return EMAIL_REGEX.test(trimmedEmail);
};

export const getEmailErrorMessage = (email: string): string => {
  if (!email || email.trim().length === 0) {
    return "Email address is required";
  }

  const trimmedEmail = email.trim();

  if (trimmedEmail.length > 254) {
    return "Email address is too long (max 254 characters)";
  }

  if (!trimmedEmail.includes("@")) {
    return "Email must contain @ symbol";
  }

  const parts = trimmedEmail.split("@");
  if (parts.length !== 2) {
    return "Email must contain exactly one @ symbol";
  }

  const [localPart, domainPart] = parts;

  if (!localPart || localPart.length === 0) {
    return "Email must have a username before @";
  }

  if (localPart.length > 64) {
    return "Email username is too long (max 64 characters)";
  }

  if (!domainPart || domainPart.length === 0) {
    return "Email must have a domain after @";
  }

  if (!domainPart.includes(".")) {
    return "Email domain must contain a dot (e.g, gmail.com)";
  }

  const domainParts = domainPart.split(".");
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2) {
    return "Email domain must have a valid extension (at least 2 characters)";
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return "Please enter a valid email address";
  }

  return "";
};

export const normalizeEmail = (email: string): string => {
  if (!email) return "";
  return email.trim().toLowerCase();
};
