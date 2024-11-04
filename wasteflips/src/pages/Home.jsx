import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <div className="hero-content">
          <div className="content-text">
            <h2>Simplifying Waste Management for a Cleaner Future</h2>
            <p>
              We prioritize sustainabilty and convenience.Discover how easy it
              is to schedule and find recycling services near you.
            </p>
          </div>
          <div className="content-bt">
            <a href>
              <button className="pickup-bt">Schedule a Pickup</button>
            </a>
            <a href="#learn-more">
              <button className="learn-bt">Learn More</button>
            </a>
          </div>
        </div>
        <section className="audience">
          <div className="container">
            <h2>Our Audience</h2>
            <div className="audience-cards">
              <div className="card">
                <img src="../IMAGES/Frame 1000010200.png" alt="Individuals" />
                <div className="card-content">
                  <h3>Individuals</h3>
                  <p>
                    People looking for easy way to manage waste, schedule
                    pickups, and sell used items instead of throwing them away.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="../IMAGES/IMAGE11.png" alt="Businesses" />
                <div className="card-content">
                  <h3>Businesses</h3>
                  <p>
                    Companies that need reliable waste management solutions and
                    wish to resell old equipment or furniture rather than
                    discarding them.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src="../IMAGES/image.png"
                  alt="Waste Management and Recycling Companies"
                />
                <div className="card-content">
                  <h3>Waste Management and Recycling Companies</h3>
                  <p>
                    Service providers who will benefit from the platform by
                    connecting with users in need of waste disposal, recycling
                    services, and bulk pickups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section3">
          <div>
            <h2> OUR SERVICES</h2>
          </div>
          <div className="section3-content">
            <div className="section3-writeup">
              <div className="section3-text1">
                <h3>
                  {" "}
                  Your <span>Waste</span> , Our Respon<span>siblity</span>
                </h3>
                <p>
                  {" "}
                  We provide efficent waste management solution tailored to your
                  needs. From residential pickups to commerical services, we
                  ensure a cleaner, greener community
                </p>
              </div>
              <div className="section3-text2">
                <div className="text2">
                  <h3> Recycling</h3>
                  <p> Conveinent recyling options near you.</p>
                </div>
                <div className="text3">
                  <h3>Pickups</h3>
                  <p> Schedule your waste pickup easily.</p>
                </div>
              </div>
              <div className=" section3-butons">
                <a href="../PAGES/dispose.html">
                  <button className="pickup-bt">Dispose Now</button>
                </a>
                <a href="#learn-more">
                  <button className="learn-bt">Learn More</button>
                </a>
              </div>
            </div>
            <div className="section3-img">
              <img src="../IMAGES/image (1).png" alt="NO IMAGE" />
            </div>
          </div>
        </section>
        <section className="section4" id="learn-more">
          <div className="section4-child1">
            <h2>Scheduling Your Pickup Made Simple</h2>
            <p>
              Scheduling a waste pickup is straightforward with our
              service.Follow these easy step to ensure a hassle-free expreience.
              We are here to help you manage your waste responsibly
            </p>
          </div>
          <div className="section4-child2">
            <div className="child2-cnt1">
              <svg
                width={54}
                height={55}
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
                  strokeWidth={2}
                />
                <path
                  d="M40 32.6501C40 42.039 32.3888 49.6501 23 49.6501C13.6112 49.6501 6 42.039 6 32.6501C6 23.2613 13.6112 15.6501 23 15.6501C32.3888 15.6501 40 23.2613 40 32.6501Z"
                  stroke="#1B5E20"
                  strokeWidth={2}
                />
              </svg>
              <h3> Step 1: Choose Your Pickup Date</h3>
              <p>Select a conenient date that works for you.</p>
            </div>
            <div className="child2-cnt2">
              <svg
                width={65}
                height={66}
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
                  strokeWidth={2}
                />
              </svg>
              <h3>Step 2: Fill Out Your Details</h3>
              <p>Provide your address and contact information.</p>
            </div>
            <div className="child2-cnt3">
              <svg
                width={54}
                height={55}
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
                  strokeWidth={2}
                />
              </svg>
              <h3>Step 3: Confirm Your Pickup</h3>
              <p>Review your information and confirm the pickup.</p>
            </div>
          </div>
          <div className=" section4-bt">
            <a href>
              <button className="pickup-bt">Schedule a Pickup</button>
            </a>
          </div>
        </section>
        <section className="section4-a" id="our-mission">
          <div className="mission">
            <div className="mission-title">
              <div>
                <h2>Our Mission</h2>
                <p>
                  WasteFlip is here to simplify and revolutionize waste
                  management by empowering individuals and businesses to
                  effortlessly manage their waste pickups, reduce landfill
                  contributions, and contribute to a cleaner, greener
                  environment. Through innovative rescheduling solutions and
                  accessible recycling options, we aim to promote sustainability
                  and create lasting environmental impact, one pickup at a time.
                </p>
              </div>
              <img src="../IMAGES/image 79.jpg" alt />
            </div>
            <div className="mission-text-heading">
              <h4>How WasteFlip Contributes to a Greener Environment </h4>
              <ol>
                <li>
                  <strong>Efficient Waste Pickup Scheduling:</strong>
                  By offering flexible and real-time waste pickup scheduling,
                  WasteFlip reduces the likelihood of missed collections. This
                  ensures that waste is collected regularly, preventing overflow
                  and littering, which can harm local environments. More
                  frequent pickups lead to cleaner streets and less unmanaged
                  waste in communities.
                </li>
                <li>
                  <strong>Encouraging Waste Sorting and Recycling:</strong>
                  WasteFlip allows users to categorize waste types (e.g.,
                  plastics, electronics, organic waste) during scheduling. By
                  integrating nearby recycling center locators, the platform
                  promotes proper waste sorting and recycling. This reduces the
                  volume of waste sent to landfills and increases the reuse of
                  materials, thus conserving natural resources.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="section4-b">
          <div className="section4-b-cnt">
            <img src="../IMAGES/Frame 1000010230.png" />
            <img src="../IMAGES/Frame 1000010231.png" />
            <img src="../IMAGES/Frame 1000010232.png" />
            <img
              src="../IMAGES/Frame 1000010233.png"
              width="300px"
              height="270px"
            />
          </div>
        </section>
        <section className="section5">
          <div>
            <h2>Helping Different Industries and Facilities</h2>
            <div>
              {" "}
              <button />
            </div>
          </div>
          <div className="section5-content">
            <div className="container">
              <div className="audience-cards">
                <div className="card">
                  <img
                    src="../IMAGES/image-80.png"
                    className="image-80"
                    alt="Individuals"
                  />
                  <div className="card-content">
                    <h3>Hospitalities &amp; Events</h3>
                    <p>
                      We recognize the importance of a greener environment, so
                      we provide the best and most reliable waste Service for
                      your industry.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src="../IMAGES/image 81.png" alt />
                  <div className="card-content">
                    <h3>Educational Facilities</h3>
                    <p>
                      The Educational cleaning services are backed by experience
                      and help you ensure that your trash are appropriately
                      separated and disposed off.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src="../IMAGES/image (3).png" alt />
                  <div className="card-content">
                    <h3>Medical and Pharmaceutic</h3>
                    <p>
                      Our waste service providers are highly knowledgeable and
                      help you ensure that your trash are appropriately
                      separated and disposed off to provide you with the most
                      efficient service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section6">
          <div className="QnA">
            <h2>Frequently Asked Questions</h2>
            <div className="questionbox-cont">
              <div className="question-box">
                <h3>Is this a waste management company website?</h3>
                <p>
                  No, it is not a waste management company website.It is a
                  website that connects users to waste management and recycling
                  faclities.
                </p>
              </div>
              <div className="question-box">
                <h3>What problem is the website solving?</h3>
                <p>
                  This website is solving the problem of effective and
                  unreliable waste management services to its users. It also
                  solves the problem of waste disposing and recycling habits.
                </p>
              </div>
              <div className="question-box">
                <h3>
                  How do i recycle used motor oil? Filters? Other auto fluids?
                </h3>
                <p>
                  Place one-gallon screw-top containers, curbside beside the
                  carts you have set out.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="newsletter">
          <div className="newsletter-ct">
            <div className="newsletter-text-ct">
              <h2>Newsletter</h2>
              <p>
                Sign up for Industry alert, deals, news and insight from
                WasteFlip.
              </p>
            </div>
            <form>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">
                Subscribe
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9L16 12M16 12L13 15M16 12L8 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#ffffff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
