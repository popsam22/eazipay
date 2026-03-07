import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import CreateAccount from "./pages/auth/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
