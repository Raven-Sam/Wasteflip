import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./pages/Landingpage";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
