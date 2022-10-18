let buttonBefore = document.querySelector ('.button__before');
let buttonAfter = document.querySelector ('.button__after');
let sliderToggle = document.querySelector ('.slider__toggle');
let imageBefore = document.querySelector ('.picture-example__before');
let imageAfter = document.querySelector ('.picture-example__after');

function e() {
  sliderToggle.style.marginRight = "auto",
  sliderToggle.style.marginLeft = "",
  imageBefore.classList.add("picture-example--active"),
  imageAfter.classList.remove("picture-example--active")
}
function t() {
  sliderToggle.style.marginRight = "",
  sliderToggle.style.marginLeft = "auto",
  imageBefore.classList.remove("picture-example--active"),
  imageAfter.classList.add("picture-example--active")
}

buttonBefore.onclick = function() {
  e()
}
buttonAfter.onclick = function() {
  t()
}

