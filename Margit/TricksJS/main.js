const buttonBackTop = document.querySelector("#backtotop");
const mobileButton = document.querySelector(".mobile");
const navMenu = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const header = document.querySelector("header");
const modalButton = document.querySelector("#openModal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeBtn");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  buttonBackTop.style.display =
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
      ? "block"
      : "none";

  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? header.classList.add("bg")
    : header.classList.remove("bg");
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener("click", mobMenu);
  }
  navMenu.classList.contains("responsive")
    ? navMenu.classList.remove("responsive")
    : navMenu.classList.add("responsive");
};

const modalShow = () => {
  overlay.classList.toggle("visible");
};

buttonBackTop.addEventListener("click", getToTop);
mobileButton.addEventListener("click", mobMenu);
modalButton.addEventListener("click", modalShow);
closeButton.addEventListener("click", modalShow);
