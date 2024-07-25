import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import Checkbox from "./Checkbox";
import PriceRange from "./PriceRange";
import useToggle from "../utils/useToggle";
import "./DropdownFilter.css";

function DropdownFilter(props) {
  const dropdownRef = useRef(null);
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

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  // useEffect(() => {
  //   if (dropdownState) {
  //     Flip.from(dropdownState, { duration: 0.5, ease: "none" });
  //   }
  // }, [dropdownOpened]);

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

  function changeDropdown() {
    const getTarget = gsap.utils.selector(dropdownRef?.current);
    const savedState = Flip?.getState(getTarget(".dropdown-element"), {
      props: "opacity,padding",
      simple: true,
    });
    dropdownRef?.current?.classList?.toggle("closed");
    Flip?.from(savedState, { ease: "none", prune: true, duration: 0.5 });
  }

  return (
    <div className="dropdown-div" ref={dropdownRef}>
      <div className="dropdown-title" onClick={changeDropdown}>
        <p>{title}</p>
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="dropdown-element">{renderFilter(type, values)}</div>
    </div>
  );
}

export default DropdownFilter;
