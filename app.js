const menu = document.querySelector(".site-menu");
const hiddennav = document.querySelector(".hiddennav");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  hiddennav.classList.toggle("shownav");
  overlay.classList.add("overlay-show");
  document.querySelector("main").style.position = "fixed";
  document.querySelector("main").style.marginTop = "180px";
});

overlay.addEventListener("click", () => {
  hiddennav.classList.remove("shownav");
  overlay.classList.remove("overlay-show");
  document.querySelector("main").style.position = "static";
  document.querySelector("main").style.marginTop = "0px";
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 500) {
    hiddennav.classList.remove("shownav");
    overlay.classList.remove("overlay-show");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    hiddennav.classList.remove("shownav");
    overlay.classList.remove("overlay-show");
    document.querySelector("main").style.position = "static";
    document.querySelector("main").style.marginTop = "0px";
  }
});
