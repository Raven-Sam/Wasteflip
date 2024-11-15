import React from "react";
import "./otp.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="otp-body">
      <div className="otp-body-ct">
        <div className="title">WasteFlip</div>
        <div className="otp-form-ct">
          <div className="right-side">
            <div className="payment-box">
              <img src="/IMAGES/icon-park-outline_check-one.png" alt="" />
            </div>
            <h2>Your payment was successful!</h2>
            <p>Thank you for helping us keep our environment</p>
            <p>clean and sustainable.</p>
            <button type="submit" className="done">
              <Link to="/recycle">Done</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
