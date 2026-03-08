import app_icon from "@/assets/Group 4.svg";
import login_icon from "@/assets/Group 10.svg";
import password_screen_icon from "@/assets/Group 9.svg";
import { useState } from "react";
import Button from "@/components/Button";
import SocialMediaContainer from "@/components/SocialMediaContainer";
import facebook_icon from "@/assets/Facebook_f_logo_(2019) 1.svg";
import apple_icon from "@/assets/Frame 4.svg";
import google_icon from "@/assets/g1520.svg";
import TextInput from "@/components/TextInput";
import PhoneInputField from "@/components/PhoneInputField";
import show_password from "@/assets/eye-off-line.svg";
import hide_password from "@/assets/eye-line.svg";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import { validatePhoneNumber } from "@/validations/phone.validator";
import { validatePassword } from "@/validations/password.validator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [displayPasswordScreen, setDisplayPasswordScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const phoneValid = validatePhoneNumber(phone);
  const phoneState = phone ? (phoneValid ? "success" : "error") : undefined;

  return (
    <div>
      <div className="w-full flex flex-col bg-mangolia items-center gap-10 p-10">
        <img
          src={app_icon}
          alt="app icon"
          className="object-contain w-[88.14px] h-6"
        />
        {!displayPasswordScreen ? (
          <img
            src={login_icon}
            alt="login icon"
            className="object-contain w-[187.69px] h-[190.51]"
          />
        ) : (
          <img
            src={password_screen_icon}
            alt="login icon"
            className="object-contain w-39 h-48.5"
          />
        )}
      </div>
      {!displayPasswordScreen ? (
        <div className="flex flex-col p-4 gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-black b3 w-1/2">Enter your mobile number</h1>
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
          </div>
          <div className="flex flex-col gap-6">
            <Button
              title="Continue"
              onClick={() => setDisplayPasswordScreen(true)}
              disabled={!phoneValid}
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
      ) : (
        <div className="flex flex-col p-4 gap-6">
          <h1>Enter your password</h1>
          <div className="flex flex-col gap-4 mb-20">
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
            <p
              className="text-celtic-blue b6 text-end cursor-pointer"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot password?
            </p>
          </div>
          <Button title="Login" onClick={() => navigate("/home")} disabled={!validatePassword(password)} />
          <p className="r7 text-slate-gray text-center">
            Don't have an account?{" "}
            <span
              className="text-celtic-blue b6 cursor-pointer"
              onClick={() => navigate("/create-account")}
            >
              Sign up
            </span>
          </p>
        </div>
      )}
      {showForgotPassword && (
        <ForgotPassword onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
};

export default Login;
