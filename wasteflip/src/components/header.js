import React from "react";


class Header extends React.Component {
    render() {
        return ( <nav>
  <div className="logo">WasteFlip</div>
  <div className="hamburger" id="hamburger-menu">
    <div className="bar" />
    <div className="bar" />
    <div className="bar" />
  </div>
  <ul id="nav-links">
    <li className="link"><a href="/PAGES/homepage.html">Home</a></li>
    <li className="link"><a href="/PAGES/recycle.html">Recycle Center</a></li>
    <li className="link"><a href="/PAGES/schedule.html">Pickup Schedule</a></li>
    <li className="link"><a href="#contact-us">Contact Us</a></li>
    <a href="PAGES/SIGNUP-PAGE.HTML"><button className="nav-button">Sign Up</button></a>
  </ul>
</nav>

        );
    }
}

export default Header;