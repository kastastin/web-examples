const containerEl = document.getElementById("container");
const registerBtnEl = document.getElementById("register");
const loginBtnEl = document.getElementById("login");

registerBtnEl.addEventListener("click", () =>
  containerEl.classList.add("active")
);

loginBtnEl.addEventListener("click", () =>
  containerEl.classList.remove("active")
);
