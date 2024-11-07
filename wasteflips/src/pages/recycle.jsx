import React from "react";
import Hero from "../components/hero";
import { FAQSection, NewsletterSection } from "./Landingpage";
import { Link } from "react-router-dom";
import "./recycle.css";

// Reusable components for different elements
const WasteType = ({ link, imgSrc, label }) => (
  <div className="waste-type">
    {link ? (
      <Link to={link}>
        <img src={imgSrc} alt={label} />
      </Link>
    ) : (
      <img src={imgSrc} alt={label} />
    )}
    <div className="green-bar">{label}</div>
  </div>
);

const WasteDropOff = ({ imgSrc, title, distance }) => (
  <div className="area">
    <img src={imgSrc} alt={title} />
    <h5>{title}</h5>
    <p>
      <i className="fa fa-location-arrow" aria-hidden="true"></i> {distance}{" "}
      miles away
    </p>
  </div>
);

const TestimonialCard = ({ imgSrc, name, location, text }) => (
  <div className="testimonial-card">
    <div className="card-top">
      <img src={imgSrc} alt={`${name}-customer`} />
      <h5
        style={{ marginTop: "10px" }}
      >{`Testimonial from ${name}, ${location}`}</h5>
    </div>
    <p>{text}</p>
  </div>
);

const Recycle = () => {
  // Sample data arrays
  const wasteTypes = [
    { link: "/dispose", imgSrc: "/IMAGES/plastic.png", label: "Plastic" },
    { imgSrc: "/IMAGES/paper.png", label: "Paper" },
    { imgSrc: "/IMAGES/carton.png", label: "Carton" },
  ];

  const dropOffs = [
    { imgSrc: "/IMAGES/coya1.png", title: "COYA Mayfair", distance: 0.3 },
    { imgSrc: "/IMAGES/coya1.png", title: "COYA Mayfair", distance: 0.3 },
    { imgSrc: "/IMAGES/coya1.png", title: "COYA Mayfair", distance: 0.3 },
    { imgSrc: "/IMAGES/coya1.png", title: "COYA Mayfair", distance: 0.3 },
    { imgSrc: "/IMAGES/coya1.png", title: "COYA Mayfair", distance: 0.3 },
    { imgSrc: "/IMAGES/coya1.png", title: "COYA Mayfair", distance: 0.3 },
    // Add more drop-off locations as needed
  ];

  const testimonials = [
    {
      imgSrc: "/IMAGES/testimonial1.png",
      name: "Amina",
      location: "Lagos",
      text: "WasteFlip makes scheduling my waste pickups so simple! I can choose the exact time that works best for me, and their service has been reliable every time. It’s such a stress-free way to manage household waste.",
    },
    {
      imgSrc: "/IMAGES/testimonial2.png",
      name: "Tunde",
      location: "Abuja",
      text: "As a business owner, I need an easy way to manage waste disposal, and WasteFlip has been perfect. Scheduling pickups is straightforward, and I never have to worry about waste piling up. It's quick and reliable!",
    },
  ];

  return (
    <div className="recycle-container">
      <Hero
        classname="recycle-hero"
        text="Find The Nearest Recycle Services"
        description="Easily locate nearby recycling centers to drop off your waste and contribute to a greener environment."
      />

      {/* Waste Selection */}
      <div className="selection">
        <div className="type">
          <h4>Waste Type</h4>
          <select name="waste-type" id="waste-type">
            <option value="default">Choose an item</option>
            <option value="plastic">Plastic</option>
            <option value="paper">Paper</option>
            <option value="metal">Metal</option>
            <option value="bottle">Bottle</option>
            <option value="can">Can</option>
          </select>
        </div>
        <div className="type location">
          <h4>Your Location</h4>
          <p>Map area</p>
        </div>
      </div>

      {/* Waste Type Categories */}
      <div className="scale">
        <h4>Domestic</h4>
        <h4>Commercial</h4>
      </div>
      <div className="category">
        <p>Organic</p>
        <p>Plastic</p>
        <p>Electronics</p>
        <p>Glass</p>
        <p>Metal</p>
        <p>E-Waste</p>
        <p>Paper</p>
      </div>

      {/* Waste Categories Display */}
      <div className="waste-category">
        {wasteTypes.map((type, index) => (
          <WasteType
            key={index}
            link={type.link}
            imgSrc={type.imgSrc}
            label={type.label}
          />
        ))}
      </div>

      {/* Nearby Waste Drop-Offs */}
      <div className="drop">
        <h3>Nearby Waste Drop-Offs</h3>
        <div className="drop-Offs">
          {dropOffs.map((dropOff, index) => (
            <WasteDropOff
              key={index}
              imgSrc={dropOff.imgSrc}
              title={dropOff.title}
              distance={dropOff.distance}
            />
          ))}
        </div>
        <button className="button">
          Show Map
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.58582L8 5.58582V18.4142L12 14.4142V1.58582Z"
              fill="#ffffff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.70711 3.29292C3.42111 3.00692 2.99099 2.92137 2.61732 3.07615C2.24364 3.23093 2 3.59557 2 4.00003V14C2 14.2652 2.10536 14.5196 2.29289 14.7071L6 18.4142V5.58582L3.70711 3.29292Z"
              fill="#ffffff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7071 5.29292L14 1.58582V14.4142L16.2929 16.7071C16.5789 16.9931 17.009 17.0787 17.3827 16.9239C17.7564 16.7691 18 16.4045 18 16V6.00003C18 5.73481 17.8946 5.48046 17.7071 5.29292Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h5>What Our Customers Feel About Us</h5>
        <h3>
          We Devote Time and Effort to Provide Quality Services to Our Customers
        </h3>
        <div className="test-wrap">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgSrc={testimonial.imgSrc}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>

      <FAQSection />
      <NewsletterSection />
    </div>
  );
};

export default Recycle;
