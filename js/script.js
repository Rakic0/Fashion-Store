function elScroll(el) {
  document
    .getElementById(`${el}`)
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

const btnTransparent = document.querySelectorAll(".btn--transparent ");
const day = document.querySelector(".day");
const night = document.querySelector(".night");
const grid2Col = document.querySelector(".grid-2--col");

const blurIn = (el) => {
  el.classList.add("blur-in");
  el.classList.remove("blur-out");
};

const blurOut = (el) => {
  el.classList.remove("blur-in");
  el.classList.add("blur-out");
};

const gridGrow = (el1, el2) => {};

day.addEventListener("mouseover", function () {
  blurIn(night);
  btnTransparent[0].classList.add("btn--transparent-hover");
});

day.addEventListener("mouseout", function () {
  blurOut(night);
  btnTransparent[0].classList.remove("btn--transparent-hover");
});

night.addEventListener("mouseover", function () {
  blurIn(day);
  btnTransparent[1].classList.add("btn--transparent-hover");
});

night.addEventListener("mouseout", function () {
  blurOut(day);
  btnTransparent[1].classList.remove("btn--transparent-hover");
});
