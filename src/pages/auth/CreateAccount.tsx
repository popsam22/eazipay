import app_icon from "@/assets/Group 4.svg";
import TextInput from "@/components/TextInput";
import show_password from "@/assets/eye-off-line.svg";
import hide_password from "@/assets/eye-line.svg";
import { useState } from "react";
import Button from "@/components/Button";
import SocialMediaContainer from "@/components/SocialMediaContainer";
import facebook_icon from "@/assets/Facebook_f_logo_(2019) 1.svg";
import apple_icon from "@/assets/Frame 4.svg";
import google_icon from "@/assets/g1520.svg";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  getEmailErrorMessage,
} from "@/validations/email.validator";
import { validatePassword } from "@/validations/password.validator";
import PasswordStrengthIndicator from "@/components/PasswordStrengthIndicator";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailValid = validateEmail(email);
  const emailState = email ? (emailValid ? "success" : "error") : undefined;
  const emailError =
    emailState === "error" ? getEmailErrorMessage(email) : undefined;

  const canSubmit = !!name && emailValid && validatePassword(password);

  return (
    <div className="w-full flex flex-col bg-white items-center gap-10 p-4">
      <img
        src={app_icon}
        alt="app icon"
        className="object-contain w-[88.14px] h-6 mb-5"
      />
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-6">
          <h1 className="text-black b3">Create Account</h1>
          <TextInput
            label="Name"
            placeholder="e.g. John Doe"
            value={name}
            required
            onChange={setName}
          />
          <TextInput
            label="Email"
            placeholder="e.g. email@example.com"
            value={email}
            onChange={setEmail}
            required
            state={emailState}
            errorMessage={emailError}
          />
          <div className="flex flex-col gap-2">
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={setPassword}
              required
              icon={showPassword ? hide_password : show_password}
              iconOnClick={() => setShowPassword(!showPassword)}
            />
            <PasswordStrengthIndicator password={password} />
          </div>
          <div className="flex gap-1 items-center">
            <input type="checkbox" />
            <p className="r7 text-black whitespace-nowrap">
              I accept{" "}
              <span className=" text-celtic-blue">terms and conditions</span>{" "}
              and <span className="text-celtic-blue">privacy policy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Button
            title="Create a new account"
            onClick={() => navigate("/otp")}
            disabled={!canSubmit}
          />
          <div className="w-full flex items-center gap-4">
            <div className="flex-1 h-px bg-alice-blue" />
            <p className="text-slate-gray r7">or continue using</p>
            <div className="flex-1 h-px bg-alice-blue" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <SocialMediaContainer img={facebook_icon} />
            <SocialMediaContainer img={google_icon} />
            <SocialMediaContainer img={apple_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
