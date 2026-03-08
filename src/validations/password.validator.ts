export const passwordCriteria = [
  { label: "Min. 8 characters", test: (p: string) => p.length >= 8 },
  { label: "Uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "Number", test: (p: string) => /\d/.test(p) },
  {
    label: "Special character",
    test: (p: string) => /[!@#$%^&*(),.?":{}|<>]/.test(p),
  },
];

export const validatePassword = (password: string): boolean =>
  passwordCriteria.every((c) => c.test(password));
