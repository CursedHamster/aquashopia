import { useState } from "react";
import "./Sign.css";
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";
import {
  validateEmailChange,
  validatePasswordChange,
  checkEmptyInputs,
} from "../utils/inputValidation";

export default function SignIn() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    validateEmailChange(e.target.value, setErrors);
  };
  const handlePasswordChange = (e) => {
    validatePasswordChange(e.target.value, setErrors);
  };

  function handleSignIn(e) {
    e.preventDefault();
    if (
      !(errors.email || errors.name || errors.password || errors.city) &&
      !checkEmptyInputs(
        ["sign_in_email", "sign_in_password"],
        ["email", "password"],
        setErrors
      )
    ) {
      navigate("/");
    }
  }

  return (
    <div>
      <div className="sign-container section-padding">
        <h1>Authentication</h1>
        <form action="post" className="sign-form">
          <div className="form-group">
            <label htmlFor="sign-in-email">Email</label>
            <input
              className={"form-control " + (errors.email ? "error-input" : "")}
              type="email"
              name="sign-in-email"
              id="sign_in_email"
              placeholder="youremail@gmail.com"
              onChange={handleEmailChange}
              autoComplete="email"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <PasswordInput
            name="sign-in-password"
            id="sign_in_password"
            error={errors.password}
            handlePasswordChange={handlePasswordChange}
          />
          <div className="btn-container">
            <Button buttonStyle="btn--dark" onClick={handleSignIn}>
              Sign In
            </Button>
            <Link className="btn-link" to="/sign-up">
              Create account
            </Link>
          </div>
          <Link className="additional-link" to="/sign-up">
            Forgot your password?
          </Link>
        </form>
      </div>
    </div>
  );
}
