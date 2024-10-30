import React, { useEffect, useRef } from "react";
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
          { href: "/PAGES/homepage.html", label: "Home" },
          { href: "/PAGES/recycle.html", label: "Recycle Center" },
          { href: "/PAGES/schedule.html", label: "Pickup Schedule" },
          { href: "#contact-us", label: "Contact Us" },
        ]}
        button={{ href: "/PAGES/SIGNUP-PAGE.HTML", label: "Sign Up" }}
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
        <a href={link.href}>{link.label}</a>
      </li>
    ))}
    <li>
      <a href={button.href}>
        <button className="nav-button">{button.label}</button>
      </a>
    </li>
  </ul>
));

export default Header;
