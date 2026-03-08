import error_icon from "@/assets/error-warning-line.svg";
import success_icon from "@/assets/checkbox-circle-line.svg";
import type { TextInputProps } from "@/interfaces/textInput.interface";

const TextInput = ({
  label,
  placeholder,
  type = "text",
  icon,
  iconOnClick,
  state,
  errorMessage,
}: TextInputProps) => {
  const borderClass =
    state === "error"
      ? "border-golden-gate-bridge"
      : state === "success"
      ? "border-shamrock"
      : "border-azureish-white";

  const bgClass = state === "disabled" ? "bg-cultured" : "";
  const inputTextClass =
    state === "error" ? "text-golden-gate-bridge" : "text-black";

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
      <label className="text-black r7">{label}</label>
      <div
        className={`flex justify-between border ${borderClass} ${bgClass} rounded-sm p-3 gap-2`}
      >
        <input
          type={type}
          placeholder={placeholder}
          disabled={state === "disabled"}
          className={`r6 placeholder:text-silver-sand bg-inherit w-full outline-none ${inputTextClass}`}
        />
        {rightIcon && (
          <img
            src={rightIcon}
            alt="input icon"
            className={`w-5 h-5 shrink-0 ${rightIconClass}`}
            onClick={!state ? iconOnClick : undefined}
            style={!state && iconOnClick ? { cursor: "pointer" } : undefined}
          />
        )}
      </div>
      {state === "error" && errorMessage && (
        <p className="r7 text-golden-gate-bridge">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextInput;
