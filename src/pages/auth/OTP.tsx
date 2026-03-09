import { useState, useEffect } from "react";
import app_icon from "@/assets/Group 4.svg";
import check_icon from "@/assets/checkbox-circle-line.svg";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(false);

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
    if (digits.length === 6) {
      setLoading(true);
      setTimeout(() => navigate("/home"), 1500);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-gray-900 items-center p-6 gap-6">
      <img
        src={app_icon}
        alt="app icon"
        className="object-contain w-[88.14px] h-6 mb-5"
      />

      <h1 className="text-black dark:text-white b4 text-center">
        An SMS sent to your mobile number +962 79 XXX-XXXX
      </h1>

      <div className="flex flex-col items-center gap-4">
        <p className="text-slate-gray dark:text-gray-400 r6">
          Enter six-digit code
        </p>

        <div
          className={`border-b-2 pb-1 flex items-center ${
            isComplete ? "border-shamrock" : "border-ocean-blue"
          }`}
          style={{ width: "197px" }}
        >
          <input
            type="text"
            inputMode="numeric"
            value={displayValue}
            onChange={otpChangeHandler}
            placeholder="XXX-XXX"
            className="outline-none text-black dark:text-white placeholder:text-silver-sand text-center bg-transparent flex-1 min-w-0"
            style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.5 }}
          />
          {isComplete && (
            <img
              src={check_icon}
              alt="OTP complete"
              className="object-contain w-8 h-8 success-icon shrink-0"
            />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          disabled={timeLeft > 0}
          onClick={() => setTimeLeft(60)}
          className={
            timeLeft > 0
              ? "text-slate-gray dark:text-gray-400 r6"
              : "text-celtic-blue b6 cursor-pointer"
          }
        >
          Resend code
        </button>
        <span className="text-black dark:text-white r6">
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="w-full mt-auto">
        <Button
          title="Done"
          onClick={() => navigate("/home")}
          disabled={!isComplete}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default OTP;
