const burger = document.querySelector(".btn-burger");
const navabr = document.querySelector(".navbar");
const btnHome = document.querySelector(".btnHome");
const btnDashboad = document.querySelector(".btnDashboad");
const btnAdmin = document.querySelector(".btnAdmin");
const btnAccount = document.querySelector(".btnAccount");
const btnPrev = document.querySelector(".prev");
const cardsContainer = document.querySelector(".container-ads");

burger.addEventListener("click", function () {
  if (navabr.classList.contains("expn")) {
    navabr.classList.remove("expn");
  } else {
    navabr.classList.add("expn");
  }
});

btnPrev.onclick = function () {
  cardsContainer.scrollBy(1000, 0);
};
