// validation
export const validateForm = (formData, validationRules) => {
  const errors = {};

  validationRules.forEach((rule) => {
    const { field, regex, errorMessage } = rule;

    if (formData.hasOwnProperty(field)) {
      if (!regex.test(formData[field])) {
        errors[field] = errorMessage;
      }
    }
  });

  if (!errors.hasOwnProperty("confirmPassword")) {
    if (
      formData["confirmPassword"] &&
      formData["password"] !== formData["confirmPassword"]
    ) {
      errors["confirmPassword"] = "Password must be same";
    }
  }

  return errors;
};
