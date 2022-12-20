const SignUpButton = document.getElementById("signUp");
const SignInButton = document.getElementById("signIn");
const container = document.getElementById("container");

SignUpButton.addEventListener('click', () =>
  container.classList.add("right-panel-active")
);

SignInButton.addEventListener('click', () =>
  container.classList.remove("right-panel-active")
);
