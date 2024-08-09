import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!window.location.href.endsWith('/login')) {
        return;
      }

      if (user) {
        console.log("Logged in");
        navigate("/");
        return;
      }
      else {
        console.log("Logged Out");
        navigate('/login')
        return;
      }
    });
  });

  return (
    <div className="">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
