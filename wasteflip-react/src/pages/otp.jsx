import React from "react";
import { useNavigate } from "react-router-dom";
import "./otp.css";

const Otp = () => {
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    // Navigate to the payment success page or perform OTP verification
    navigate("/Success");
  };

  const renderOtpInputs = (count) =>
    Array.from({ length: count }, (_, index) => (
      <input
        key={index}
        type="number"
        maxLength="1"
        pattern="[0-9]"
        inputMode="numeric"
        aria-label={`OTP digit ${index + 1}`}
        className="otp-input"
      />
    ));

  return (
    <div className="otp-body">
      <div className="otp-body-ct">
        <h1 className="title">WasteFlip</h1>
        <div className="otp-form-ct">
          <div className="otp-text">
            <h2>Enter OTP</h2>
            <p>Please enter the OTP sent to your registered mobile number.</p>
          </div>
          <form className="otp-ct" onSubmit={handleVerify}>
            <div className="otp-inputs" role="group" aria-label="OTP inputs">
              {renderOtpInputs(6)}
            </div>
            <div className="resend-container">
              <p>
                Didn’t receive the OTP? <a href="#">Resend OTP</a>
              </p>
            </div>
            <button type="submit" className="verify-btn">
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
