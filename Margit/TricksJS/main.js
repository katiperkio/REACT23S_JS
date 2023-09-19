const buttonBackTop = document.querySelector("#backtotop");

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

buttonBackTop.addEventListener("click", getToTop);
