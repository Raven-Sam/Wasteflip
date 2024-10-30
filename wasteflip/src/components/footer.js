import React from "react";


class Footer extends React.Component {
    render() {
        return ( 
  <footer className="footer">
    <div className="container">

      <div className="section">
        <h3>WasteFlip</h3>
        <div className="wasteflip-info">
          <p>Manage your waste pickups with us as we seamlessly connect you to the best waste management around you</p>
        </div>
      </div>

      <div className="section">
        <h4>Company</h4>
        <p><a href="#">About Us</a></p>
        <p><a href="#">Sustainability</a></p>
        <p><a href="#">Leadership team</a></p>
      </div>
      <div className="section">
        <h4>Services</h4>
        <p><a href="#">Individuals</a></p>
        <p><a href="#">Businesses</a></p>
        <p><a href="#">Waste Management</a></p>
      </div>
      <div className="section">
        <h4>You can also reach us on our social media platforms</h4>
        <div className="social-icons">
          <a href="#"><img src="/IMAGES/prime_twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="/IMAGES/grommet-icons_linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="/IMAGES/Vector.svg" alt="Instagram" /></a>
        </div>
      </div>
    </div>
    <div className="more-inf">
      <p>For more information, reach out to us</p>
      <div>
        <p><img src="/IMAGES/mail.svg" alt="email" /><a href="mailto:Wasteflip@gmail.com">Wasteflip@gmail.com</a></p>
        <p><img src="/IMAGES/phone-outgoing.svg" alt="call" /><a href="tel:+2342868849802">+234 2868 849802</a></p>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="bottom-left">
        <a href="#">Privacy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <div className="copyright">
          © 2024 WasteFlip. All rights reserved.
        </div>
        <div className="image-container">
          <img src="/IMAGES/Trash.svg" alt="Trash Icon" />
        </div>
      </div>
    </div></footer>
    );

    }

}
export default Footer;