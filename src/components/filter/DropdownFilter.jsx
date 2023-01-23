import { useState } from "react";
import Checkbox from "./Checkbox";
import PriceRange from "./PriceRange";
import useToggle from "../utils/useToggle";
import "./DropdownFilter.css";

function DropdownFilter(props) {
  const [dropdownOpened, toggleDropdown] = useToggle("true");
  const { type, title, values } = props.filter;
  const [rangeValues, setRangeValues] = useState(
    values.endingPrice
      ? {
          starting: values.startingPrice,
          ending: values.endingPrice,
        }
      : null
  );

  function renderFilter(type, values) {
    switch (type) {
      case "colorCheckbox": {
        return renderColorCheckbox(values);
      }
      case "priceRange": {
        return renderPriceRange(values);
      }
      default: {
        return;
      }
    }
  }

  function handleCheckboxChange(value) {
    props.setFilterObjects((prev) => {
      if (prev.colors && prev.colors !== undefined && prev.colors.length > 0) {
        return {
          ...prev,
          colors: prev.colors.includes(value)
            ? prev.colors.filter((color) => color !== value)
            : [...prev.colors, value],
        };
      }

      return {
        ...prev,
        colors: [value],
      };
    });
  }

  function renderColorCheckbox(values) {
    const checkboxes = values.map((val) => (
      <Checkbox
        key={val.value}
        val={val}
        handleCheckboxChange={handleCheckboxChange}
      />
    ));
    return <div className="checkboxes">{checkboxes}</div>;
  }

  function handlePriceRangeChange(value) {
    props.setFilterObjects((prev) => ({
      ...prev,
      priceRange: {
        startingPrice: value.starting,
        endingPrice: value.ending,
      },
    }));
  }

  function renderPriceRange(values) {
    return (
      <PriceRange
        values={values}
        rangeValues={rangeValues}
        setRangeValues={setRangeValues}
        handlePriceRangeChange={handlePriceRangeChange}
      />
    );
  }

  return (
    <div className="dropdown-div">
      <div className="dropdown-title" onClick={toggleDropdown}>
        <p>{title}</p>
        <i
          className={
            "fas " + (dropdownOpened ? "fa-chevron-up" : "fa-chevron-down")
          }
        ></i>
      </div>
      <div
        className={
          "dropdown-element " +
          (dropdownOpened
            ? dropdownOpened === "true"
              ? ""
              : "opened"
            : "closed")
        }
      >
        {renderFilter(type, values)}
      </div>
    </div>
  );
}

export default DropdownFilter;
