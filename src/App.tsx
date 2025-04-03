import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Homepage from "./pages/Homepage/Homepage";
import NoPageFound from "./pages/Error/NoPageFound";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" replace />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="*" element={<NoPageFound />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
