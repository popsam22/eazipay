import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import type { ForgotPasswordProps } from "../../interfaces/forgotPassword.interface";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const ForgotPassword = ({ onClose }: ForgotPasswordProps) => {
  const [mode, setMode] = useState<"email" | "mobile">("email");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-70" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 pb-10 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-black b5">Forgot your password?</h2>
            <button onClick={onClose} className="text-celtic-blue b6">
              Done
            </button>
          </div>
          {mode === "email" ? (
            <TextInput
              label="Email"
              placeholder="e.g. email@example.com"
              type="email"
            />
          ) : (
            <div className="flex flex-col gap-1">
              <label className="text-black r7">Mobile number</label>
              <div className="flex border border-azureish-white p-3 rounded-sm w-full items-center">
                <PhoneInput
                  international
                  defaultCountry="NG"
                  value={phone}
                  onChange={(value) => setPhone(value || "")}
                  className="w-full border-0 outline-0"
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
                      "flex-1 outline-none r6 placeholder:text-silver-sand border-0 ml-2",
                    placeholder: "7X-XXXXXXX",
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <Button title="Send reset link" onClick={() => {}} />
          <button
            onClick={() => setMode(mode === "email" ? "mobile" : "email")}
            className="text-celtic-blue b6 text-center cursor-pointer"
          >
            {mode === "email" ? "Use mobile instead" : "Use email instead"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
