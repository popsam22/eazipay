import { Route, Routes } from "react-router-dom";
import Login from "@/pages/auth/Login";
import CreateAccount from "@/pages/auth/CreateAccount";
import OTP from "@/pages/auth/OTP";
import Home from "@/pages/main/Home";
import History from "@/pages/main/History";
import More from "@/pages/main/More";
import { Settings } from "@/pages/main/Settings";
import { DarkModeContext } from "@/contexts/DarkModeContext";
import useDarkMode from "@/hooks/useDarkMode";

function App() {
  const darkMode = useDarkMode();
  return (
    <DarkModeContext.Provider value={darkMode}>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/more" element={<More />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DarkModeContext.Provider>
  );
}

export default App;
