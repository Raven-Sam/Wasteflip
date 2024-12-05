import React from "react";
import Hero from "../components/hero";
import { DropOffs, Testimonials } from "./recycle";
import { FAQSection, NewsletterSection } from "./Landingpage";

const Dispose = () => {
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
  const faqData = [
    {
      question: "How do I dispose off hazardous Materials?",
      answer:
        "Hazardous materials such as batteries, chemicals, paints, or electronics require special handling. We’ll connect you with certified waste management services that handle these items safely and in compliance with local environmental regulations.",
    },
    {
      question: "What are the hours of the collection?",
      answer: "Service hours are Monday - Friday from 8:00 am to 6:00 pm.",
    },
    {
      question: "How do I recycle used motor oil, filters and other fluids?",
      answer:
        "Place one-gallon screw-top containers, curbside beside the carts you have set out.",
    },
  ];
  return (
    <div className="recycle-container">
      <Hero
        classname="recycle-hero dispose-hero"
        text="Plastic"
        description=""
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

      <DropOffs dropOffs={dropOffs} />
      <Testimonials testimonials={testimonials} />
      <FAQSection faqData={faqData} />
      <NewsletterSection />
    </div>
  );
};

export default Dispose;
