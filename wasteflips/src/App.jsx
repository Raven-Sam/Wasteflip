import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Layout from "./pages/layout";
import "./App.css";
import Home from "./pages/Home";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import Recycle from "./pages/recycle";
import Dispose from "./pages/dispose";
import Otp from "./pages/otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="recycle" element={<Recycle />} />
          <Route path="dispose" element={<Dispose />} />
        </Route>
        {/* Routes without layout */}

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
