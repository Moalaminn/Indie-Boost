const background = document.querySelector(".bg");
window.addEventListener("scroll", function () {
  background.style.backgroundPosition = +window.pageYOffset + "px";
});
