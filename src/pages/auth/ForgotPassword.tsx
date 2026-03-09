import { useState } from "react";
import type { ForgotPasswordProps } from "@/interfaces/forgotPassword.interface";
import TextInput from "@/components/TextInput";
import PhoneInputField from "@/components/PhoneInputField";
import Button from "@/components/Button";
import {
  validateEmail,
  getEmailErrorMessage,
} from "@/validations/email.validator";
import { validatePhoneNumber } from "@/validations/phone.validator";

const ForgotPassword = ({ onClose }: ForgotPasswordProps) => {
  const [mode, setMode] = useState<"email" | "mobile">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const emailValid = validateEmail(email);
  const emailState = email ? (emailValid ? "success" : "error") : undefined;
  const emailError =
    emailState === "error" ? getEmailErrorMessage(email) : undefined;

  const phoneValid = validatePhoneNumber(phone);
  const phoneState = phone ? (phoneValid ? "success" : "error") : undefined;

  const canSubmit = mode === "email" ? emailValid : phoneValid;

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-70" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl p-4 pb-10 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-black dark:text-white b5">Forgot your password?</h2>
            <button onClick={onClose} className="text-celtic-blue b6">
              Done
            </button>
          </div>
          {mode === "email" ? (
            <TextInput
              label="Email"
              placeholder="e.g. email@example.com"
              type="email"
              value={email}
              required
              onChange={setEmail}
              state={emailState}
              errorMessage={emailError}
            />
          ) : (
            <PhoneInputField
              label="Mobile number"
              value={phone}
              onChange={setPhone}
              state={phoneState}
              errorMessage={
                phoneState === "error"
                  ? "Please enter a valid phone number"
                  : undefined
              }
            />
          )}
        </div>
        <div className="flex flex-col gap-6">
          <Button
            title="Send reset link"
            onClick={() => {}}
            disabled={!canSubmit}
          />
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
