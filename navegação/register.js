const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login");
const registerlink = document.querySelector(".register");
const wrapper_register = document.querySelector(".wrapper_register");
const sun_position = document.querySelector(".sun_position");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
registerlink.addEventListener("click", () => {
  wrapper_register.classList.add("active2");
  sun_position.classList.add("active3");
});
loginlink.addEventListener("click", () => {
  wrapper_register.classList.remove("active2");
  sun_position.classList.remove("active3");
});
