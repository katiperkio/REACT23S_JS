const buttonBackTop = document.querySelector("#backtotop");
const mobileButton = document.querySelector(".mobile");
const navMenu = document.querySelector("nav ul");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    buttonBackTop.style.display = "block";
  } else {
    buttonBackTop.style.display = "none";
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  if (navMenu.classList.contains("responsive")) {
    navMenu.classList.remove("responsive");
  } else {
    navMenu.classList.add("responsive");
  }
};

buttonBackTop.addEventListener("click", getToTop);
mobileButton.addEventListener("click", mobMenu);
