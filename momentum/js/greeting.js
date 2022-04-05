
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")


const savedUsername = localStorage.getItem("username");

const KEY_NAME = "username"
const HIDDEN_CLASSNAME = "hidden"



if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreeting();
}


function paintGreeting () {
  const username = localStorage.getItem("username");
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  
  localStorage.setItem(KEY_NAME, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreeting();
}

