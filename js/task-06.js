const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.dataset.length);
  const enteredValueLength = validationInput.value.length;

  validationInput.classList.remove("valid", "invalid");

  if (enteredValueLength === requiredLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
