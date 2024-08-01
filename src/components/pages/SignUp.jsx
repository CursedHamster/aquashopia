import { useState } from "react";
import "./Sign.css";
import { Button } from "../Button";
import PasswordInput from "../PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { animateFishIntoTank } from "../utils/animation";
import {
  validateEmailChange,
  validateNameChange,
  validatePasswordChange,
  validateCityChange,
  checkEmptyInputs,
} from "../utils/inputValidation";

export default function SignIn() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    validateEmailChange(e.target.value, setErrors);
  };
  const handleNameChange = (e) => {
    validateNameChange(e.target.value, setErrors);
  };
  const handlePasswordChange = (e) => {
    validatePasswordChange(e.target.value, setErrors);
  };
  const handleCityChange = (e) => {
    validateCityChange(e.target.value, setErrors);
  };

  function handleSignUp(e) {
    e.preventDefault();
    if (
      !(errors.email || errors.name || errors.password || errors.city) &&
      !checkEmptyInputs(
        ["sign_up_email", "sign_up_name", "sign_up_password", "sign_up_city"],
        ["email", "name", "password", "city"],
        setErrors
      )
    ) {
      animateFishIntoTank("#anim-fish", "#anim-tank");
      setTimeout(() => {
        navigate("/sign-in");
      }, 2100);
    }
  }

  return (
    <div>
      <div className="sign-container section-padding">
        <h1>Registration</h1>
        <form action="post" className="sign-form">
          <div className="form-group">
            <label htmlFor="sign-up-email">Email</label>
            <input
              className={"form-control " + (errors.email ? "error-input" : "")}
              type="email"
              name="sign-up-email"
              id="sign_up_email"
              placeholder="youremail@gmail.com"
              onChange={handleEmailChange}
              autoComplete="email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="sign_up_name">Name</label>
            <input
              className={"form-control " + (errors.name ? "error-input" : "")}
              type="text"
              name="sign-up-name"
              id="sign_up_name"
              placeholder="Your Name"
              onChange={handleNameChange}
              autoComplete="username"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <PasswordInput
            name="sign-up-password"
            id="sign_up_password"
            error={errors.password}
            handlePasswordChange={handlePasswordChange}
          />
          <div className="form-group">
            <label htmlFor="sign_up_country">Country</label>
            <select
              className="form-control"
              name="sign-up-country"
              id="sign_up_country"
            >
              <option>Ukraine</option>
              <option>UK United Kingdom</option>
              <option>US United States</option>
              <option>Canada</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sign_up_city">City</label>
            <input
              className={"form-control " + (errors.city ? "error-input" : "")}
              type="text"
              name="sign-up-city"
              id="sign_up_city"
              placeholder="Kyiv"
              onChange={handleCityChange}
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>
          <div className="btn-container">
            <Button buttonStyle="btn--dark" onClick={handleSignUp}>
              Sign Up
            </Button>
            <Link className="btn-link" to="/sign-in">
              Log in into existing account
            </Link>
          </div>
        </form>
        <div className="transparent-div"></div>
        <img id="anim-fish" src="/images/fish-4.png" alt="Fish" />
        <img
          id="anim-tank"
          src="https://www.pngall.com/wp-content/uploads/4/Aquarium-Fish-Tank-PNG-Images.png"
          alt="Tank"
        />
      </div>
    </div>
  );
}
