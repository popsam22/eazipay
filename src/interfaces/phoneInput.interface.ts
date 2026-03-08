export interface PhoneInputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  state?: "error" | "success" | "disabled";
  errorMessage?: string;
}
