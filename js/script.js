let forms = document.querySelector(".form-container");
let field = document.querySelector(".field");

// Adding an event listener on form submit to prevent the form from submitting.

forms.addEventListener("submit", (e) => {
  e.preventDefault();

  // Iterates through each input and adds an event listener of submit on each.

  field.addEventListener("submit", () => {
    // If the input does not have a value then add the error message.
    if (!field.value || field.value == '') {
      document.classList.add("error");
      console.log("Error detected");
    }

    // If the input does not have a value then remove the error message.
    document.classList.remove("error");
    console.log("All fields are validated ");
  });
});
