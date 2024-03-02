const form = document.querySelector(".login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
let infoFromInput = {};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  } else {
    infoFromInput = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(infoFromInput);
    form.reset();
  }
}
