import { useState, useEffect } from "react";
import "./PriceRange.css";

function PriceRange(props) {
  const { startingPrice, endingPrice } = props.values;
  const { rangeValues, setRangeValues, handlePriceRangeChange } = props;
  const [rangeInputs, setRangeInputs] = useState({
    starting: startingPrice,
    ending: endingPrice,
  });

  useEffect(() => {
    setRangeInputs({
      starting: rangeValues.starting,
      ending: rangeValues.ending,
    });
    handlePriceRangeChange(rangeValues);
  }, [rangeValues]);

  function handleSPriceInputChange(e) {
    e.preventDefault();

    setRangeValues((prev) => ({
      ...prev,
      starting: e.target.value,
    }));
  }

  function handleEPriceInputChange(e) {
    e.preventDefault();

    setRangeValues((prev) => ({
      ...prev,
      ending: e.target.value,
    }));
  }

  function handleSPriceInputBlur(e) {
    e.preventDefault();
    const newValue = e.target.value;

    if (numberify(newValue) && numberify(rangeInputs.ending)) {
      if (parseInt(newValue) > parseInt(rangeInputs.ending)) {
        setRangeValues((prev) => ({
          ...prev,
          starting: parseInt(rangeInputs.ending),
        }));
      } else if (parseFloat(newValue) > endingPrice) {
        setRangeValues((prev) => ({ ...prev, starting: endingPrice }));
      } else {
        setRangeValues((prev) => ({ ...prev, starting: parseInt(newValue) }));
      }
    } else if (newValue === "") {
      setRangeValues((prev) => ({ ...prev, starting: 0 }));
    }
  }

  function handleEPriceInputBlur(e) {
    e.preventDefault();
    var newValue = e.target.value;

    if (numberify(newValue) && numberify(rangeInputs.starting)) {
      if (parseFloat(newValue) < parseFloat(rangeInputs.starting)) {
        setRangeValues((prev) => ({
          ...prev,
          ending: parseInt(rangeInputs.starting),
        }));
      } else if (parseFloat(newValue) > endingPrice) {
        setRangeValues((prev) => ({ ...prev, ending: endingPrice }));
      } else {
        setRangeValues((prev) => ({ ...prev, ending: parseInt(newValue) }));
      }
    } else if (newValue === "") {
      setRangeValues((prev) => ({ ...prev, ending: 0 }));
    }
  }

  function numberify(value) {
    if (Number(value)) {
      return true;
    } else if (value === "0" || value === 0) {
      return true;
    }

    return false;
  }

  function valueToPercentage(value) {
    return (value * 100) / endingPrice;
  }

  function handleSChange(e) {
    e.preventDefault();

    const newValue = Number(e.target.value);

    if (newValue < rangeValues.ending) {
      setRangeValues((prev) => ({
        ...prev,
        starting: newValue,
      }));
    }
  }

  function handleEChange(e) {
    e.preventDefault();

    const newValue = Number(e.target.value);

    if (newValue > rangeValues.starting) {
      setRangeValues((prev) => ({
        ...prev,
        ending: newValue,
      }));
    }
  }

  return (
    <div className="price-range-div">
      <div className="price-range-inputs">
        <label className="price-range-label">
          <input
            type="number"
            id="sPrice"
            name="sPrice"
            className="price-range-input"
            min={startingPrice}
            max={endingPrice}
            value={rangeInputs.starting}
            onChange={handleSPriceInputChange}
            onBlur={handleSPriceInputBlur}
          />
        </label>
        <label className="price-range-label">
          <input
            type="number"
            id="ePrice"
            name="ePrice"
            className="price-range-input"
            min={startingPrice}
            max={endingPrice}
            value={rangeInputs.ending}
            onChange={handleEPriceInputChange}
            onBlur={handleEPriceInputBlur}
          />
        </label>
      </div>
      <div className="price-range-bar-div">
        <div className="price-range-bars">
          <input
            className="price-range-bar"
            type="range"
            value={rangeValues.starting}
            min={startingPrice}
            max={endingPrice}
            step="1"
            onChange={handleSChange}
          />
          <input
            className="price-range-bar"
            type="range"
            value={rangeValues.ending}
            min={startingPrice}
            max={endingPrice}
            step="1"
            onChange={handleEChange}
          />
        </div>
        <div className="price-range-bar-fake">
          <div
            className="price-range-thumb"
            style={{ left: valueToPercentage(rangeValues.starting) + "%" }}
          ></div>
          <div className="price-range-track">
            <div
              className="price-range-inner-track"
              style={{
                left:
                  "calc(" +
                  valueToPercentage(rangeValues.starting) +
                  "% + (var(--thumb-size) / 2))",
                right:
                  "calc(100% - " +
                  valueToPercentage(rangeValues.ending) +
                  "% + (var(--thumb-size) / 2))",
              }}
            ></div>
          </div>
          <div
            className="price-range-thumb"
            style={{
              right:
                "calc(100% - " + valueToPercentage(rangeValues.ending) + "%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
