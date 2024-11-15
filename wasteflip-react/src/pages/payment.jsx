import React from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayNow = () => {
    navigate("/Otp");
  };

  const renderInput = (label, id, placeholder, type = "text") => (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} required />
    </div>
  );

  return (
    <div className="payment-section">
      <div className="card-info">
        <h2>Card Details</h2>
        <h4 id="card-type">Card Type</h4>
        <div className="card-icons">
          <img src="/IMAGES/mastercard icon.svg" alt="Mastercard" />
          <img src="/IMAGES/visa icon.svg" alt="Visa Card" />
          <img src="/IMAGES/paypal.svg" alt="PayPal" />
        </div>
      </div>

      <div className="payment-info">
        {renderInput("Name on Card", "card-name", "Aminat Lasis")}
        {renderInput("Number on Card", "card-number", "1111 2222 3333 4444")}

        <div className="exp-cvv">
          {renderInput("Expiration Date", "expiration", "10/27")}
          {renderInput("CVV", "cvv", "195")}
        </div>

        <div className="payment-actions">
          <button type="button" className="cancel-btn">
            Cancel Payment
          </button>
          <button type="button" className="pay-btn" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
