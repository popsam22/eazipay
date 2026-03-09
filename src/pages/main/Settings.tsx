import profile_picture from "@/assets/Profile photo.svg";
import shield_icon from "@/assets/shield-check-fill.png";
import ListItems from "@/components/ListItems";
import { settingsItems } from "@/constants/settings";
import { useDarkModeContext } from "@/context/DarkModeContext";

export const Settings = () => {
  const { isDark, toggle } = useDarkModeContext();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-6 px-4 flex flex-col gap-10">
      <h1 className="text-black dark:text-white b5 text-center">
        Profile Settings
      </h1>
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
          <h1 className="b6 text-black dark:text-white">Abdullah Ghatasheh</h1>
          <h2 className="r7 text-slate-gray dark:text-gray-400">
            Joined 2 years ago
          </h2>
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
        <div className="flex justify-between items-center py-3">
          <p className="b7 text-black dark:text-white">Dark Mode</p>
          <button
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle dark mode"
            onClick={toggle}
            className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-blue ${
              isDark ? "bg-ocean-blue" : "bg-azureish-white"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                isDark ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
