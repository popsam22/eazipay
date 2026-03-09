import { Route, Routes } from "react-router-dom";
import Login from "@/pages/auth/Login";
import CreateAccount from "@/pages/auth/CreateAccount";
import OTP from "@/pages/auth/OTP";
import Home from "@/pages/main/Home";
import History from "@/pages/main/History";
import More from "@/pages/main/More";
import { Settings } from "@/pages/main/Settings";
import { DarkModeContext } from "@/context/DarkModeContext";
import useDarkMode from "@/hooks/useDarkMode";

function App() {
  const darkMode = useDarkMode();
  return (
    <DarkModeContext.Provider value={darkMode}>
      <div className="sm:min-h-screen sm:bg-gray-200 sm:dark:bg-gray-950 sm:flex sm:justify-center">
        <div className="w-full sm:max-w-sm relative">
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/more" element={<More />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
