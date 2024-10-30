import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <CompanyInfo />
      <FooterLinks
        title="Company"
        links={["About Us", "Sustainability", "Leadership team"]}
      />
      <FooterLinks
        title="Services"
        links={["Individuals", "Businesses", "Waste Management"]}
      />
      <SocialMedia
        title="You can also reach us on our social media platforms"
        icons={[
          { href: "#", src: "/IMAGES/prime_twitter.svg", alt: "Twitter" },
          {
            href: "#",
            src: "/IMAGES/grommet-icons_linkedin.svg",
            alt: "LinkedIn",
          },
          { href: "#", src: "/IMAGES/Vector.svg", alt: "Instagram" },
        ]}
      />
    </div>

    <ContactInfo
      title="For more information, reach out to us"
      contacts={[
        {
          type: "email",
          href: "mailto:Wasteflip@gmail.com",
          src: "/IMAGES/mail.svg",
          text: "Wasteflip@gmail.com",
        },
        {
          type: "phone",
          href: "tel:+2342868849802",
          src: "/IMAGES/phone-outgoing.svg",
          text: "+234 2868 849802",
        },
      ]}
    />

    <hr className="hr" />

    <FooterBottom />
  </footer>
);

const CompanyInfo = () => (
  <div className="section1">
    <h3>WasteFlip</h3>
    <div className="wasteflip-info">
      <p>
        Manage your waste pickups with us as we seamlessly connect you to the
        best waste management around you
      </p>
    </div>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div className="section2">
    <h4>{title}</h4>
    {links.map((link, index) => (
      <p key={index}>
        <a href="#">{link}</a>
      </p>
    ))}
  </div>
);

const SocialMedia = ({ title, icons }) => (
  <div className="section4">
    <h4>{title}</h4>
    <div className="social-icons">
      {icons.map((icon, index) => (
        <a href={icon.href} key={index}>
          <img src={icon.src} alt={icon.alt} />
        </a>
      ))}
    </div>
  </div>
);

const ContactInfo = ({ title, contacts }) => (
  <div className="more-inf">
    <h5>{title}</h5>
    <div>
      {contacts.map((contact, index) => (
        <p className="mail" key={index}>
          <img src={contact.src} alt={contact.type} />
          <a href={contact.href}>{contact.text}</a>
        </p>
      ))}
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom" id="contact-us">
    <div className="bottom-left">
      <a href="#">Privacy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
    </div>
    <div className="copyright">
      &copy; 2024 WasteFlip. All rights reserved.
      <div className="image-container">
        <img src="/IMAGES/Trash.svg" alt="Trash Icon" />
      </div>
    </div>
  </div>
);

export default Footer;
