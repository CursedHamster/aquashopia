import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import "./Navbar.css";

function Navbar() {
  const { cartProducts, getCartNumber } = useContext(Context);
  const [click, setClick] = useState(false);
  const [cartNumber, setCartNumber] = useState(0);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const getCartNumberString = (number) => {
    return number > 9 ? "9+" : number;
  };

  useEffect(() => {
    setCartNumber(getCartNumber());
  }, [cartProducts]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container section-padding">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            aquashopia <i className="fa-solid fa-fish-fins"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/assortment"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Assortment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-links" onClick={closeMobileMenu}>
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="sign-link in"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="sign-link up"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-links cart-icon"
                onClick={closeMobileMenu}
              >
                <i className="fa-solid fa-shopping-cart" title="Shopping cart">
                  <span className="cart-number">
                    {getCartNumberString(cartNumber)}
                  </span>
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
