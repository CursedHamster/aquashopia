const emailFormat = /[!#$%^&*()+\-=[\]{};':"\\|,<>/?]+/;
const cityFormat = /[!@#$%^&*_+=[\]{}:\\|<>/?]+/;
const errorMessages = {
  empty: "Field can not be empty",
  specialCharacters: "Field contains characters that are not allowed",
  emailError: "Incorrect email",
};

const lengthExceeded = (l) => "Maximum length is " + l + " characters";

const validateEmailChange = (newValue, setErrors) => {
  if (!checkNotEmpty(newValue)) {
    setErrors((prev) => ({ ...prev, email: errorMessages.empty }));
  } else if (!checkAllowedLength(newValue, 20)) {
    setErrors((prev) => ({ ...prev, email: lengthExceeded(20) }));
  } else if (!checkSpecialCharacters(newValue, emailFormat)) {
    setErrors((prev) => ({
      ...prev,
      email: errorMessages.specialCharacters,
    }));
  } else if (!checkEmail(newValue)) {
    setErrors((prev) => ({ ...prev, email: errorMessages.emailError }));
  } else {
    setErrors((prev) => ({ ...prev, email: null }));
  }
};
const validateNameChange = (newValue, setErrors) => {
  if (!checkNotEmpty(newValue)) {
    setErrors((prev) => ({ ...prev, name: errorMessages.empty }));
  } else if (!checkAllowedLength(newValue, 50)) {
    setErrors((prev) => ({ ...prev, name: lengthExceeded(50) }));
  } else {
    setErrors((prev) => ({ ...prev, name: null }));
  }
};
const validatePasswordChange = (newValue, setErrors) => {
  if (!checkNotEmpty(newValue)) {
    setErrors((prev) => ({ ...prev, password: errorMessages.empty }));
  } else if (!checkAllowedLength(newValue, 15)) {
    setErrors((prev) => ({ ...prev, password: lengthExceeded(15) }));
  } else {
    setErrors((prev) => ({ ...prev, password: null }));
  }
};
const validateCityChange = (newValue, setErrors) => {
  if (!checkNotEmpty(newValue)) {
    setErrors((prev) => ({ ...prev, city: errorMessages.empty }));
  } else if (!checkAllowedLength(newValue, 50)) {
    setErrors((prev) => ({ ...prev, city: lengthExceeded(50) }));
  } else if (!checkSpecialCharacters(newValue, cityFormat)) {
    setErrors((prev) => ({
      ...prev,
      city: errorMessages.specialCharacters,
    }));
  } else {
    setErrors((prev) => ({ ...prev, city: null }));
  }
};

const checkAllowedLength = (value, length) => {
  return value.length <= length;
};

const checkNotEmpty = (value) => {
  return (
    value &&
    value !== undefined &&
    value.length > 0 &&
    value.split(" ").join("").length > 0
  );
};

const checkSpecialCharacters = (value, format) => {
  return !format.test(value);
};

const checkEmail = (value) => {
  return (
    !value.includes(" ") &&
    value.split("@").filter((string) => string !== "").length === 2
  );
};

const checkEmptyInputs = (ids, errorNames, setErrors) => {
  if (ids.length > 0) {
    return ids
      .map((id, i) => {
        const isEmpty = !checkNotEmpty(document.getElementById(id).value);
        if (isEmpty) {
          setErrors((prev) => ({
            ...prev,
            [errorNames[i]]: errorMessages.empty,
          }));

          return true;
        }

        return false;
      })
      .some((entry) => entry === true);
  }

  return false;
};

export {
  validateEmailChange,
  validateNameChange,
  validatePasswordChange,
  validateCityChange,
  checkEmptyInputs,
};
