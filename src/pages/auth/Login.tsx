import app_icon from "../../assets/Group 4.svg";
import login_icon from "../../assets/Group 10.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="w-full flex flex-col bg-[#F7F4FF] items-center gap-10 p-10">
        <img
          src={app_icon}
          alt="app icon"
          className="object-contain w-[88.14px] h-6"
        />
        <img
          src={login_icon}
          alt="login icon"
          className="object-contain w-[187.69px] h-[190.51]"
        />
      </div>
      <div className="flex flex-col p-4">
        <h1 className="text-[#191919] font-semibold text-[21px]">
          Enter your mobile number
        </h1>
        <div className="flex flex-col mb-10 w-full">
          <label htmlFor="phone-number" className="text-sm text-[#3D3D3D] mb-2">
            Mobile number
          </label>
          <div className="flex border p-3 rounded-lg w-full items-center">
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
                  "--PhoneInputCountrySelectArrow-color": "#6B7280",
                  "--PhoneInput-color--focus": "#075AAA",
                } as React.CSSProperties
              }
              numberInputProps={{
                className:
                  "flex-1 outline-none text-sm text-[#1F1F1F] bg-transparent placeholder:text-[#A3A3A3] placeholder:font-light border-0 ml-2",
                placeholder: "Enter your phone number",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
