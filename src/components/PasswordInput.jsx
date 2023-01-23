import useToggle from "./utils/useToggle";
import "./PasswordInput.css";

function PasswordInput(props) {
  const [show, toggleShow] = useToggle(false);
  const handleClick = (e) => {
    toggleShow();
  };
  const { name, id, handlePasswordChange, error } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>Password</label>
      <div className="password-input">
        <input
          className={"form-control " + (error ? "error-input" : "")}
          type={show ? "text" : "password"}
          name={name}
          id={id}
          autoComplete="current-password"
          onChange={handlePasswordChange}
        />
        <i
          className={"fas " + (show ? "fa-eye-slash" : "fa-eye")}
          onClick={handleClick}
        ></i>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default PasswordInput;
