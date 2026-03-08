import profile_picture from "@/assets/Profile photo.svg";
import shield_icon from "@/assets/shield-check-fill.png";
import ListItems from "@/components/ListItems";
import { settingsItems } from "@/constants/settings";

export const Settings = () => {
  return (
    <div className="py-6 px-4 flex flex-col gap-10">
      <h1 className="text-black b5 text-center">Profile Settings</h1>
      <div className="mt-5 flex flex-col gap-2 items-center">
        <div className="relative border-2 border-verdigris rounded-full">
          <img
            src={profile_picture}
            alt="profile picture"
            className="object-contain w-24 h-24"
          />
          <img
            src={shield_icon}
            alt="verified"
            className="absolute bottom-0 right-0 w-6 h-6"
          />
        </div>
        <div className="text-center">
          <h1 className="b6 text-black">Abdullah Ghatasheh</h1>
          <h2 className="r7 text-slate-gray">Joined 2 years ago</h2>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {settingsItems.map((item, index) => (
          <ListItems
            key={index}
            {...item}
            isLast={index === settingsItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
