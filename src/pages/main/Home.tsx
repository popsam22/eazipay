import profile_picture from "@/assets/Profile photo.svg";
import settings from "@/assets/settings-3-line.svg";
import topup_icon from "@/assets/upload-line.svg";
import transfer_icon from "@/assets/exchange-funds-line.svg";
import withdraw_icon from "@/assets/download-line.svg";
import add_icon from "@/assets/add-line.svg";
import steve_icon from "@/assets/Face=Face 2, Size=64.svg";
import ahmed_icon from "@/assets/Face=Face 3, Size=64.svg";
import susan_icon from "@/assets/Face=Face 4, Size=64.svg";
import { useNavigate } from "react-router-dom";
import ListItems from "@/components/ListItems";
import Navbar from "@/components/Navbar";
import { flatTransactions } from "@/constants/transaction";
import useCountUp from "@/hooks/useCountUp";
import { useDarkModeContext } from "@/contexts/DarkModeContext";

const recentTransactions = flatTransactions.slice(0, 3);
const BALANCE = 14235.34;

const Home = () => {
  const navigate = useNavigate();
  const { isDark, toggle } = useDarkModeContext();
  const animatedBalance = useCountUp(BALANCE);
  const integerPart = Math.floor(animatedBalance).toLocaleString("en-US");
  const decimalPart = (animatedBalance % 1).toFixed(2).slice(1);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-indigo dark:bg-gray-800 py-6 px-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            <img
              src={profile_picture}
              alt="profile picture"
              className="object-contain w-12 h-12"
            />
            <p className="b6 text-white max-w-[40%]">Hello, Abdullah!</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative w-10 h-5 rounded-full transition-colors focus:outline-none bg-white/20"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  isDark ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <img
              src={settings}
              alt="settings icon"
              className="object-contain w-6 h-6 cursor-pointer"
              onClick={() => navigate("/settings")}
            />
          </div>
        </div>
        <div
          className="border border-indigo rounded-2xl py-6 px-8 flex flex-col items-center gap-4"
          style={{
            background: "linear-gradient(to right, #5033A4, #331098A6 65%)",
          }}
        >
          <div className="text-center">
            <h1 className="text-[#B2A1E4] r7">Main balance</h1>
            <p className="text-white b1">
              ${integerPart}<span className="r4">{decimalPart}</span>
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-2 items-center">
              <img src={topup_icon} alt="" className="w-4 h-4" />
              <p className="text-white r7">Top up</p>
            </div>
            <div className="w-px h-6 bg-[#6050DC]" />
            <div className="flex flex-col gap-2 items-center">
              <img src={withdraw_icon} alt="" className="w-4 h-4" />
              <p className="text-white r7">Withdrawal</p>
            </div>
            <div className="w-px h-6 bg-[#6050DC]" />
            <div className="flex flex-col gap-2 items-center">
              <img src={transfer_icon} alt="" className="w-4 h-4" />
              <p className="text-white r7">Transfer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 px-4 gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-black dark:text-white b6">Recent Transfers</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center">
              <div className="flex rounded-full bg-lavendar w-16 h-16 justify-center items-center">
                <img
                  src={add_icon}
                  alt="add transfers icon"
                  className="object-contain w-6 h-6"
                />
              </div>
              <p className="r7 text-black dark:text-gray-200">Add</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={profile_picture}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />
              <p className="r7 text-black dark:text-gray-200">Ali</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={steve_icon}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />
              <p className="r7 text-black dark:text-gray-200">Steve</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={ahmed_icon}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />
              <p className="r7 text-black dark:text-gray-200">Ahmed</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={susan_icon}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />
              <p className="r7 text-black dark:text-gray-200">Susan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 mb-20">
          <div className="flex justify-between items-center">
            <h1 className="b6 text-black dark:text-white">Latest Transactions</h1>
            <button
              className="text-[#6B6B6B] dark:text-gray-400 r7"
              onClick={() => navigate("/history")}
            >
              View all
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {recentTransactions.map((t, i) => (
              <ListItems
                key={t.transactionNo}
                {...t}
                isLast={i === recentTransactions.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
