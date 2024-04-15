const form = document.getElementById("form");
const username = document.getElementById("username");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const submit = document.getElementById("btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const mobileValue = mobile.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cPasswordValue = cPassword.value.trim();
  let hasError = false;

  if (usernameValue === "") {
    setError(username, "Username is required");
    hasError = true;
  } else {
    setSuccess(username);
  }

  if (mobileValue === "") {
    setError(mobile, "Mobile Number is required");
    hasError = true;
  } else if (mobileValue.length !== 10) {
    setError(mobile, "Mobile Number must be of 10 characters");
    hasError = true;
  } else {
    setSuccess(mobile);
  }

  if (email === "") {
    setError(email, "Email Id is required");
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid Email Address");
    hasError = true;
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    hasError = true;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be atleast of 8 characters");
    hasError = true;
  } else {
    setSuccess(password);
  }

  if (cPasswordValue === "") {
    setError(cPassword, "Please Confirm Your Password");
    hasError = true;
  } else if (cPasswordValue !== passwordValue || cPasswordValue.length < 8) {
    setError(cPassword, "Password doesn't match");
    hasError = true;
  } else {
    setSuccess(cPassword);
  }
  return !hasError;
  //alert("Form Submitted!");
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;

  inputControl.classList.add(".error");
  inputControl.classList.remove(".success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add(".success");
  inputControl.classList.remove(".error");
};

function isValidEmail(e) {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reg.test(e);
}

function validate() {
  if (validateInputs()) {
    alert("Form Submitted");
    window.location.reload();
  } else {
    alert("Complete the form");
  }
}
