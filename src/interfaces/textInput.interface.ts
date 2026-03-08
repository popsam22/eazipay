export interface TextInputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: string;
  iconOnClick?: () => void;
  state?: "error" | "success" | "disabled";
  errorMessage?: string;
}
