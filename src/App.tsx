import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/trendish/login/" element={<Login />} />
        <Route path="/trendish/signup/" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
