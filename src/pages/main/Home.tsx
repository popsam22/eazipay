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
import walmart_icon from "@/assets/Wallmart.svg";
import topup from "@/assets/Topup.svg";
import netflix_icon from "@/assets/Netflix.svg";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-indigo py-6 px-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            <img
              src={profile_picture}
              alt="profile picture"
              className="object-contain w-12 h-12"
            />
            <p className="b6 text-white max-w-[40%]">Hello, Abdullah!</p>
          </div>
          <img
            src={settings}
            alt="settings icon"
            className="object-contain w-6 h-6 cursor-pointer"
            onClick={() => navigate("/settings")}
          />
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
              $14,235<span className="r4">.34</span>
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
          <h1 className="text-black b6">Recent Transfers</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center">
              <div className="flex rounded-full bg-lavendar w-16 h-16 justify-center items-center">
                <img
                  src={add_icon}
                  alt="add transfers icon"
                  className="object-contain w-6 h-6"
                />
              </div>
              <p className="r7 text-black">Add</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={profile_picture}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />

              <p className="r7 text-black">Ali</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={steve_icon}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />

              <p className="r7 text-black">Steve</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={ahmed_icon}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />

              <p className="r7 text-black">Ahmed</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={susan_icon}
                alt="add transfers icon"
                className="object-contain w-16 h-16"
              />

              <p className="r7 text-black">Susan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 mb-20">
          <div className="flex justify-between">
            <h1 className="b6 text-black">Latest Transactions</h1>
            <button className="text-[#6B6B6B] r7" onClick={() => navigate("/history")}>View all</button>
          </div>
          <div className="flex flex-col gap-3">
            <ListItems
              icon={walmart_icon}
              title="Walmart"
              subtitle="Today 12:32"
              value="-$35.23"
            />
            <ListItems
              icon={topup}
              title="Top up"
              subtitle="Yesterday 02:12"
              value="+$430.00"
              type="profit"
            />
            <ListItems
              icon={netflix_icon}
              title="Netflix"
              subtitle="Dec 24 13:53"
              value="-$13.00"
              isLast
            />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
