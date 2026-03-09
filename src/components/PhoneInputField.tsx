import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import error_icon from "@/assets/error-warning-line.svg";
import success_icon from "@/assets/checkbox-circle-line.svg";
import type { PhoneInputFieldProps } from "@/interfaces/phoneInput.interface";

const PhoneInputField = ({
  label,
  value,
  onChange,
  placeholder = "7X-XXXXXXX",
  state,
  errorMessage,
}: PhoneInputFieldProps) => {
  const borderClass =
    state === "error"
      ? "border-golden-gate-bridge"
      : state === "success"
      ? "border-shamrock"
      : "border-azureish-white";

  const bgClass = state === "disabled" ? "bg-cultured" : "";

  const stateIcon =
    state === "error" ? error_icon : state === "success" ? success_icon : null;

  return (
    <div className="flex flex-col gap-1">
      <label className="r7 text-black dark:text-gray-200">
        {label} <span className="text-[#FF5F57]">*</span>
      </label>
      <div
        className={`flex border ${borderClass} ${bgClass} dark:border-gray-600 p-3 rounded-sm w-full items-center gap-2 ${state !== "disabled" ? "dark:bg-gray-800" : "dark:bg-gray-700"}`}
      >
        <PhoneInput
          international
          defaultCountry="NG"
          value={value}
          onChange={(v) => onChange(v || "")}
          disabled={state === "disabled"}
          className="w-full border-0 outline-0 flex-1"
          style={
            {
              "--PhoneInputCountryFlag-height": "20px",
              "--PhoneInputCountryFlag-width": "30px",
              "--PhoneInputCountrySelectArrow-color": "#191919",
              "--PhoneInput-color--focus": "#075AAA",
            } as React.CSSProperties
          }
          countrySelectProps={{ style: { color: "#191919" } }}
          numberInputProps={{
            className:
              "flex-1 outline-none r6 text-black dark:text-white placeholder:text-silver-sand border-0 ml-2 bg-inherit",
            placeholder,
            style: { outline: "none" },
          }}
        />
        {stateIcon && (
          <img
            src={stateIcon}
            alt="state icon"
            className={`w-5 h-5 shrink-0 ${
              state === "error" ? "error-icon" : "success-icon"
            }`}
          />
        )}
      </div>
      {state === "error" && errorMessage && (
        <p className="r7 text-golden-gate-bridge">{errorMessage}</p>
      )}
    </div>
  );
};

export default PhoneInputField;
