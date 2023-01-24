import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import helpData from "../assets/data/helpData";

function Footer() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -65;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const helpLinks = helpData.map((entry, i) => (
    <HashLink
      to={
        "/help#" +
        entry.title
          .toLowerCase()
          .split(" ")
          .join("-")
      }
      key={"help-link-" + i}
      scroll={scrollWithOffset}
    >
      {entry.title}
    </HashLink>
  ));
  return (
    <div className="footer-container section-padding">
      <div className="footer-link-container">
        <div className="footer-link-items">
          <Link to="/assortment">
            <h2>Assortment</h2>
          </Link>
          <Link to="/assortment/fish">Fish</Link>
          <Link to="/assortment/aquarium-plants">Aquarium Plants</Link>
          <Link to="/assortment/fish-food">Fish Food</Link>
          <Link to="/assortment/fish-tanks">Fish Tanks</Link>
          <Link to="/assortment/aquarium-essentials">Aquarium Essentials</Link>
        </div>
        <div className="footer-link-items">
          <Link to="/about-us">
            <h2>About us</h2>
          </Link>
          <HashLink to="/about-us#where-are-we-located" scroll={scrollWithOffset}>
            Where are we located
          </HashLink>
          <HashLink to="/about-us#how-we-were-opened" scroll={scrollWithOffset}>
            How we were opened
          </HashLink>
          <HashLink to="/about-us#who-works-here" scroll={scrollWithOffset}>Who works here</HashLink>
        </div>
        <div className="footer-link-items">
          <Link to="/help">
            <h2>Help</h2>
          </Link>
          {helpLinks}
        </div>
      </div>
      <div className="footer-link-socials">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
        </div>
        <div className="social-media-wrap">
          <small className="website-rights">aquashopia © 2022</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
