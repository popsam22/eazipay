import app_icon from "../../assets/Group 4.svg";
import login_icon from "../../assets/Group 10.svg";
import password_screen_icon from "../../assets/Group 9.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Button from "../../components/Button";
import SocialMediaContainer from "../../components/SocialMediaContainer";
import facebook_icon from "../../assets/Facebook_f_logo_(2019) 1.svg";
import apple_icon from "../../assets/Frame 4.svg";
import google_icon from "../../assets/g1520.svg";
import TextInput from "../../components/TextInput";
import show_password from "../../assets/eye-off-line.svg";
import hide_password from "../../assets/eye-line.svg";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [displayPasswordScreen, setDisplayPasswordScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="phone-number" className="r7 text-black">
                Mobile number
              </label>
              <div className="flex border border-azureish-white p-3 rounded-lg w-full items-center">
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
          </div>
          <div className="flex flex-col gap-6">
            <Button
              title="Continue"
              onClick={() => setDisplayPasswordScreen(true)}
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
          <div className="flex flex-col gap-4">
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              icon={showPassword ? hide_password : show_password}
              iconOnClick={() => setShowPassword(!showPassword)}
            />
            <p className="text-celtic-blue b6 text-end">Forgot password?</p>
          </div>
          <Button title="Login" onClick={() => ""} />
        </div>
      )}
    </div>
  );
};

export default Login;
