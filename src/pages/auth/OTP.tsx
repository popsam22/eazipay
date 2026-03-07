import { useState, useEffect } from "react";
import app_icon from "../../assets/Group 4.svg";
import check_icon from "../../assets/checkbox-circle-line.svg";
import Button from "../../components/Button";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const isComplete = otp.length === 6;
  const displayValue =
    otp.slice(0, 3) + (otp.length > 3 ? "-" + otp.slice(3) : "");

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  const otpChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(digits);
  };

  return (
    <div className="w-full flex flex-col bg-white items-center gap-6 p-6 overflow-hidden">
      <img
        src={app_icon}
        alt="app icon"
        className="object-contain w-[88.14px] h-6 mb-5"
      />

      <h1 className="text-black b4 text-center">
        An SMS sent to your mobile number +962 79 XXX-XXXX
      </h1>

      <div className="flex flex-col items-center gap-4">
        <p className="text-slate-gray r6">Enter six-digit code</p>

        <div
          className={`flex items-center gap-1 border-b-2 pb-1 w-49.25 ${
            isComplete ? "border-shamrock" : "border-ocean-blue"
          }`}
        >
          <input
            type="text"
            inputMode="numeric"
            value={displayValue}
            onChange={otpChangeHandler}
            placeholder="XXX-XXX"
            className={`outline-none b1 text-black placeholder:text-silver-sand placeholder:r1 text-center w-41.75 ${
              !isComplete ? "ml-4" : ""
            }`}
          />
          <img
            src={check_icon}
            alt="complete"
            className={`object-contain w-8 h-8 shrink-0 ${
              isComplete ? "visible" : "invisible"
            }`}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <button
          disabled={timeLeft > 0}
          onClick={() => setTimeLeft(60)}
          className={
            timeLeft > 0
              ? "text-slate-gray r6"
              : "text-celtic-blue b6 cursor-pointer"
          }
        >
          Resend code
        </button>
        <span className="text-black r6">{formatTime(timeLeft)}</span>
      </div>
      <Button title="Done" onClick={() => ""} />
    </div>
  );
};

export default OTP;
