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
