import error_icon from "@/assets/error-warning-line.svg";
import success_icon from "@/assets/checkbox-circle-line.svg";
import type { TextInputProps } from "@/interfaces/textInput.interface";

const TextInput = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
  iconOnClick,
  state,
  errorMessage,
  required,
}: TextInputProps) => {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  const borderClass =
    state === "error"
      ? "border-golden-gate-bridge"
      : state === "success"
      ? "border-shamrock"
      : "border-azureish-white dark:border-gray-600";

  const bgClass =
    state === "disabled"
      ? "bg-cultured dark:bg-gray-700"
      : "dark:bg-gray-800";

  const inputTextClass =
    state === "error"
      ? "text-golden-gate-bridge"
      : "text-black dark:text-white";

  const rightIcon =
    state === "error"
      ? error_icon
      : state === "success"
      ? success_icon
      : icon ?? null;

  const rightIconClass =
    state === "error"
      ? "error-icon"
      : state === "success"
      ? "success-icon"
      : "";

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-black dark:text-gray-200 r7">
        {label} {required && <span className="text-[#FF5F57]" aria-hidden="true">*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      <div
        className={`flex justify-between border ${borderClass} ${bgClass} rounded-sm p-3 gap-2`}
      >
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          placeholder={placeholder}
          disabled={state === "disabled"}
          aria-disabled={state === "disabled"}
          aria-invalid={state === "error"}
          aria-describedby={state === "error" && errorMessage ? `${inputId}-error` : undefined}
          className={`r6 placeholder:text-silver-sand bg-inherit w-full outline-none ${inputTextClass}`}
        />
        {rightIcon && (
          <img
            src={rightIcon}
            alt={state === "error" ? "Error" : state === "success" ? "Success" : ""}
            aria-hidden={!state || (!iconOnClick) ? "true" : undefined}
            className={`w-5 h-5 shrink-0 ${rightIconClass}`}
            onClick={!state ? iconOnClick : undefined}
            style={!state && iconOnClick ? { cursor: "pointer" } : undefined}
          />
        )}
      </div>
      {state === "error" && errorMessage && (
        <p id={`${inputId}-error`} role="alert" className="r7 text-golden-gate-bridge">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextInput;
