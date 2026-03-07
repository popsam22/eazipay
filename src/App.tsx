import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import CreateAccount from "./pages/auth/CreateAccount";
import OTP from "./pages/auth/OTP";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </>
  );
}

export default App;
