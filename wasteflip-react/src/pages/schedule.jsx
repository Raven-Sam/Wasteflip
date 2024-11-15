import React from "react";
import { Link } from "react-router-dom";
import "./css/recycle.css";

const renderInput = (label, id, placeholder, type = "text") => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} name={id} placeholder={placeholder} required />
  </div>
);
const renderSelect = (label, id, options) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select name={id} id={id} className="form-input">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
const Schedule = () => {
  const wasteSelect = [
    { value: "default", label: "Choose an item" },
    { value: "plastic", label: "Plastic" },
    { value: "paper", label: "Paper" },
    { value: "metal", label: "Metal" },
    { value: "bottle", label: "Bottle" },
    { value: "can", label: "Can" },
  ];
  const containerSelect = [
    { value: "32", label: "32 Gallon container" },
    { value: "40", label: "40 Gallon container" },
    { value: "44", label: "44 Gallon container" },
  ];
  const quantitySelect = [
    { value: "2", label: "2 containers" },
    { value: "3", label: "3 containers" },
    { value: "4", label: "4 containers" },
  ];

  return (
    <div className="recycle-container">
      <div className="Schedule-cont">
        <h5 className="Schedule">Schedule Pickup</h5>
        <p className="instruction">
          Please complete the form below to request a quote, and we’ll be in
          touch. Or you can call us, and our specialists will provide help!
        </p>
        <form className="Schedule-form">
          <div className="form-wrap">
            {renderSelect("Waste Type", "waste-type", wasteSelect)}

            {renderInput("Date", "date", "", "date")}

            {renderSelect("Container Size", "size", containerSelect)}

            {renderSelect("Quantity of Container", "quantity", quantitySelect)}
          </div>

          <h5 className="Schedule">Collection Frequency</h5>
          <div className="freq">
            {["Weekly", "Bi-Weekly", "Monthly"].map((frequency, index) => (
              <label key={index} htmlFor={frequency.toLowerCase()}>
                <input
                  type="radio"
                  name="frequency"
                  id={frequency.toLowerCase()}
                  value={frequency}
                  defaultChecked={index === 0}
                />
                {frequency}
              </label>
            ))}
          </div>

          <div className="sched-form-container">
            {renderInput("First Name", "first-name", "Amina")}
            {renderInput("Last Name", "last-name", "Lasisi")}
            {renderInput(
              "Email Address",
              "email",
              "aminalasis@gmail.com",
              "email"
            )}
            {renderInput("Phone Number", "phone", "08075698013", "tel")}
            {renderInput(
              "Address",
              "address",
              "15, John Doe Street, John B/stop, Lagos"
            )}
          </div>

          <div className="subscribe">
            <button type="submit" className="submit">
              <Link to="/Payment" className="submit-link">
                Submit Request
              </Link>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9L16 12M16 12L13 15M16 12L8 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="call">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="27.5"
                  stroke="#151515"
                />
                <rect
                  x="9"
                  y="10"
                  width="38"
                  height="36"
                  rx="18"
                  fill="#1B5E20"
                />
                <path
                  d="M36.9999 31.46L31.7299 30.85L29.2099 33.37C26.3713 31.9259 24.064 29.6186 22.6199 26.78L25.1499 24.25L24.5399 19H19.0299C18.4499 29.18 26.8199 37.55 36.9999 36.97V31.46Z"
                  fill="white"
                />
              </svg>
              <div>
                <p>Make a call</p>
                <p>08075698013</p>
              </div>
            </div>
          </div>

          <p className="sub-bot">
            By submitting your information, you agree that our specialists may
            contact you via text messages or phone calls and to use your data in
            accordance with our Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
