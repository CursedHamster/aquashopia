import "./Checkbox.css";
import useToggle from "../utils/useToggle";

function Checkbox(props) {
  const { val, handleCheckboxChange } = props;
  const [checked, toggleChecked] = useToggle(false);

  function handleChange(value) {
    toggleChecked();
    handleCheckboxChange(value);
  }

  return (
    <label className={`color-checkbox-container ${checked ? "checked" : ""}`}>
      <input
        type="checkbox"
        className={val.colorCode ? "color-checkbox" : "normal-checkbox"}
        onChange={() => handleChange(val.value)}
        checked={checked}
        style={{ "--checkbox-background": val.colorCode }}
      />
      {val.value}
    </label>
  );
}

export default Checkbox;
