import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import "./header.css";

const Header = () => {
  const navRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const hamburgerMenu = hamburgerMenuRef.current;
    const navLinks = navLinksRef.current;

    // Event handler to set background after animation ends
    const handleAnimationEnd = () => {
      nav.style.backgroundImage = "linear-gradient(to right, white, white)";
    };
    nav.addEventListener("animationend", handleAnimationEnd);

    // Toggle nav links on hamburger menu click
    const toggleNavLinks = () => {
      navLinks.classList.toggle("active");
    };
    hamburgerMenu.addEventListener("click", toggleNavLinks);

    // Cleanup listeners on unmount
    return () => {
      nav.removeEventListener("animationend", handleAnimationEnd);
      hamburgerMenu.removeEventListener("click", toggleNavLinks);
    };
  }, []);

  return (
    <nav ref={navRef} className="header-nav">
      <Logo text="WasteFlip" />
      <HamburgerMenu ref={hamburgerMenuRef} />
      <NavLinks
        ref={navLinksRef}
        links={[
          { to: "/home", label: "Home" },
          { to: "/recycle", label: "Recycle Center" },
          { to: "/schedule", label: "Pickup Schedule" },
          { to: "/#contact-us", label: "Contact Us" },
        ]}
        button={{ to: "/signup", label: "Sign Up" }}
      />
    </nav>
  );
};

const Logo = ({ text }) => <div className="logo">{text}</div>;

const HamburgerMenu = React.forwardRef((props, ref) => (
  <div ref={ref} className="hamburger" id="hamburger-menu">
    {[...Array(3)].map((_, index) => (
      <div className="bar" key={index} />
    ))}
  </div>
));

const NavLinks = React.forwardRef(({ links, button }, ref) => (
  <ul ref={ref} className="nav-links" id="nav-links">
    {links.map((link, index) => (
      <li className="link" key={index}>
        <Link to={link.to}>{link.label}</Link>
      </li>
    ))}
    <li>
      <Link to={button.to}>
        <Button classname="nav-button" text={button.label} />
      </Link>
    </li>
  </ul>
));

export default Header;
