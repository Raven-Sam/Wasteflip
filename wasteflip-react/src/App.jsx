import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Dispose,
  LandingPage,
  Layout,
  LoginPage,
  Otp,
  Payment,
  Recycle,
  Schedule,
  SignupPage,
  Success,
} from "./pages";
// import LandingPage from "./pages/Landingpage";
// import Layout from "./pages/layout";
// import Home from "./pages/Home";
// import SignupPage from "./pages/signup";
// import LoginPage from "./pages/login";
// import Recycle from "./pages/recycle";
// import Dispose from "./pages/dispose";
// import Otp from "./pages/otp";
// import Success from "./pages/success";
// import Payment from "./pages/payment";
// import Schedule from "./pages/schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="recycle" element={<Recycle />} />
          <Route path="dispose" element={<Dispose />} />
          <Route path="payment" element={<Payment />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
        {/* Routes without layout */}

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
