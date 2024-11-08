import React from "react";
import Button from "../components/button";
import Hero from "../components/hero";
import { Link } from "react-router-dom";

const audienceData = [
  {
    imgSrc: "/IMAGES/Frame 1000010200.png",
    title: "Individuals",
    description: "People looking for easy ways to manage waste.",
  },
  {
    imgSrc: "/IMAGES/IMAGE11.png",
    title: "Businesses",
    description: "Companies needing reliable waste management.",
  },
  {
    imgSrc: "/IMAGES/image.png",
    title: "Waste Management and Recycling Companies",
    description: "Service providers who benefit from the platform.",
  },
];

const serviceData = [
  { title: "Recycling", description: "Convenient recycling options near you." },
  { title: "Pickups", description: "Schedule your waste pickup easily." },
];

const stepsData = [
  {
    icon: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54 27.5544C54 42.4661 41.9117 54.5544 27 54.5544C12.0883 54.5544 0 42.4661 0 27.5544C0 12.6428 12.0883 0.554443 27 0.554443C41.9117 0.554443 54 12.6428 54 27.5544Z"
          fill="#FFEB3B"
        />
        <path
          d="M44 27.6501C44 37.039 36.3888 44.6501 27 44.6501C17.6112 44.6501 10 37.039 10 27.6501C10 18.2613 17.6112 10.6501 27 10.6501C36.3888 10.6501 44 18.2613 44 27.6501Z"
          stroke="#1B5E20"
          strokeWidth="2"
        />
        <path
          d="M40 32.6501C40 42.039 32.3888 49.6501 23 49.6501C13.6112 49.6501 6 42.039 6 32.6501C6 23.2613 13.6112 15.6501 23 15.6501C32.3888 15.6501 40 23.2613 40 32.6501Z"
          stroke="#1B5E20"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Step 1: Choose Your Pickup Date",
    description: "Select a convenient date.",
  },
  {
    icon: (
      <svg
        width="65"
        height="66"
        viewBox="0 0 65 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.94668 38.7851L18.4892 9.62802L50.0952 12.5467L57.0861 43.5076L29.8009 59.7239L5.94668 38.7851Z"
          fill="#FF3D00"
        />
        <path
          d="M30.5996 51.7319L13.424 36.6555L22.455 15.6616L45.212 17.7631L50.2457 40.0558L30.5996 51.7319Z"
          stroke="#FF9372"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Step 2: Fill Out Your Details",
    description: "Provide your address and contact information.",
  },
  {
    icon: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 54.5544L50.3827 14.0544H3.61731L27 54.5544Z"
          fill="#FF6F6B"
        />
        <path
          d="M10.8795 17.9587L27.334 46.4587L43.7885 17.9587H10.8795Z"
          stroke="#FDB4B1"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Step 3: Confirm Your Pickup",
    description: "Review and confirm the pickup.",
  },
];

const industriesData = [
  {
    imgSrc: "/IMAGES/image-80.png",
    title: "Hospitalities & Events",
    description: "Reliable waste services for your industry.",
  },
  {
    imgSrc: "/IMAGES/image-81.png",
    title: "Educational Facilities",
    description: "Appropriate waste separation and disposal.",
  },
  {
    imgSrc: "/IMAGES/image (3).png",
    title: "Medical and Pharmaceutical",
    description: "Efficient service for medical facilities.",
  },
];

const faqData = [
  {
    question: "Is this a waste management company website?",
    answer:
      "No, it connects users to waste management and recycling facilities.",
  },
  {
    question: "What problem is the website solving?",
    answer: "Reliable waste management and recycling services.",
  },
  {
    question: "How do I recycle used motor oil?",
    answer: "Place one-gallon containers curbside.",
  },
];

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AudienceSection />
      <ServicesSection />
      <PickupStepsSection />
      <IndustriesSection />
      <FAQSection faqData={faqData} />
      <NewsletterSection />
    </div>
  );
};

// Reusable subcomponents
const HeroSection = () => (
  <div className="hero-content">
    <Hero
      classname="content-text"
      text="Simplifying Waste Management for a Cleaner Future"
      description="We prioritize sustainability and convenience. Discover how easy it is toschedule and find recycling services near you."
    />
    <div className="content-bt">
      <Link to="/schedule">
        <Button classname="pickup-bt" text="Schedule a Pickup" />
      </Link>
      <a href="#learn-more">
        <Button classname="learn-bt" text="Learn More" />
      </a>
    </div>
  </div>
);

const AudienceSection = () => (
  <section className="audience">
    <div className="container">
      <h2>Our Audience</h2>
      <div className="audience-cards">
        {audienceData.map((audience, index) => (
          <AudienceCard key={index} {...audience} />
        ))}
      </div>
    </div>
  </section>
);

const AudienceCard = ({ imgSrc, title, description }) => (
  <div className="card">
    <img src={imgSrc} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ServicesSection = () => (
  <section className="section3">
    <div>
      <h2>OUR SERVICES</h2>
    </div>
    <div className="section3-content">
      <div className="section3-writeup">
        <h3>
          Your <span>Waste</span>, Our <span>Responsibility</span>
        </h3>
        <p>
          We provide efficient waste management solutions tailored to your
          needs. From residential pickups to commercial services, we ensure a
          cleaner, greener community.
        </p>
        <ServiceOptions />
        <div className="section3-buttons">
          <Link to="/login">
            <Button classname="pickup-bt" text="Dispose Now" />
          </Link>
          <a href="#learn-more">
            <Button classname="learn-bt" text="Learn More" />
          </a>
        </div>
      </div>
      <div className="section3-img">
        <img src="../IMAGES/image (1).png" alt="" />
      </div>
    </div>
  </section>
);

const ServiceOptions = () => (
  <div className="section3-text2">
    {serviceData.map((service, index) => (
      <div className="text2" key={index}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
);

const PickupStepsSection = () => (
  <section className="section4">
    <div className="section4-child1" id="learn-more">
      <h2>Scheduling Your Pickup Made Simple</h2>
      <p>
        Scheduling a waste pickup is straightforward with our service. Follow
        these easy steps to ensure a hassle-free experience.
      </p>
    </div>
    <div className="section4-child2">
      {stepsData.map((step, index) => (
        <Step key={index} {...step} />
      ))}
    </div>
    <div className="section4-bt">
      <a href="#">
        <Button classname="pickup-bt" text="Schedule a Pickup" />
      </a>
    </div>
  </section>
);

const Step = ({ icon, title, description }) => (
  <div className="child2-cnt">
    <div>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const IndustriesSection = () => (
  <section className="section5">
    <div>
      <h2>Helping Different Industries and Facilities</h2>
    </div>
    <div className="section5-content">
      <div className="container">
        <div className="audience-cards">
          {industriesData.map((industry, index) => (
            <AudienceCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const FAQSection = ({ faqData }) => (
  <section className="section6">
    <div className="QnA">
      <h2>
        Frequently Asked Questions <span className="faq">FAQ</span>
      </h2>
      <div className="questionbox-cont">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }) => (
  <div className="question-box">
    <h3>{question}</h3>
    <p>{answer}</p>
  </div>
);

export const NewsletterSection = () => (
  <div className="newsletter">
    <div className="newsletter-ct">
      <div className="newsletter-text-ct">
        <h2>Newsletter</h2>
        <p>
          Sign up for industry alerts, deals, news, and insights from WasteFlip.
        </p>
      </div>
      <form>
        <input type="email" placeholder="Enter your email address" required />
        <button type="submit">
          Subscribe
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
      </form>
    </div>
  </div>
);

export default LandingPage;
