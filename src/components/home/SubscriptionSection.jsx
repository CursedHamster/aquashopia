import { useEffect, useRef } from "react";
import { Button } from "../Button";
import "./SubscriptionSection.css";

function SubscriptionSection() {
  const wavesRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", handleWaves);

    return () => {
      document.removeEventListener("scroll", handleWaves);
    };
  }, []);

  function handleWaves() {
    if (wavesRef && window.pageYOffset >= 735 && window.pageYOffset <= 1365) {
      if (!wavesRef.current.classList.contains("animation-waves")) {
        wavesRef.current.classList.add("animation-waves");
      }
    } else {
      if (wavesRef.current.classList.contains("animation-waves")) {
        wavesRef.current.classList.remove("animation-waves");
      }
    }
  }

  return (
    <div className="subscription-section">
      <div className="subcription-container section-padding">
        <img
          className="subscription-fish"
          src="https://www.freepnglogos.com/uploads/fish-png/angel-fish-png-transparent-angel-fish-images-0.png"
          alt="Fish"
        />
        <div className="subscription-form-container">
          <h2>EMAIL SIGNUP</h2>
          <p>Sign up to our emails and be the first one to catch a rare fish</p>
          <form className="subscription-form">
            <label htmlFor="email">
              Email
              <input
                type="email"
                className="subscription-input"
                name="email"
                placeholder="Type your email..."
              />
            </label>
            <Button buttonStyle="btn--accent">Subscribe</Button>
          </form>
        </div>
      </div>
      <div id="waves" ref={wavesRef} className="subscription-waves"></div>
    </div>
  );
}

export default SubscriptionSection;
