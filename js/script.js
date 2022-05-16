let forms = document.querySelector('.form-container')
let inputFields = document.querySelector('.fields input')

// Adding an event listener on form submit to prevent the form from submitting.

forms.addEventListener('submit', (e) => {
  e.preventDefault();

  // Iterates through each input and adds an event listener of submit on each.

  inputFields.forEach((input) => {
    input.addEventListener("submit", () => {
      // If the input does not have a value then add the error message.
      if (!input.value) {
        document.classList.add("error");
      }

      // If the input does not have a value then remove the error message.
      document.classList.remove("error");
    });
  });

})
