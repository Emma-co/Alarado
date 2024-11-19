const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("dark");
  var image = document.getElementById("logo");
  var moon = document.getElementById("moon");
  var sun = document.getElementById("sun");

  image.classList.add("hidden");

  setTimeout(function () {
    if (
      image.src.includes(
        "assets/dccl--responsive-simple-homepage/alarado-icon-homepage.svg"
      )
    ) {
      image.src =
        "assets/dccl--responsive-simple-homepage/alarado-icon-homepage-dark.svg";
    } else {
      image.src =
        "assets/dccl--responsive-simple-homepage/alarado-icon-homepage.svg";
    }

    image.classList.remove("hidden");
  }, 350);

  setTimeout(function () {
    if (
      moon.src.includes(
        "assets/dccl--responsive-simple-homepage/Moon_fill_light.svg"
      )
    ) {
      moon.src = "assets/dccl--responsive-simple-homepage/Moon_fill.svg";
    } else {
      moon.src = "assets/dccl--responsive-simple-homepage/Moon_fill_light.svg";
    }
  }, 150);

  if (
    sun.src.includes("assets/dccl--responsive-simple-homepage/Sun_fill.svg")
  ) {
    sun.src = "assets/dccl--responsive-simple-homepage/Sun_fill_light.svg";
  } else {
    sun.src = "assets/dccl--responsive-simple-homepage/Sun_fill.svg";
  }
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const bgColor = document.getElementById("bg-color")

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active")
  nav.classList.toggle("active")
  bgColor.classList.toggle("active")
})

const label = document.getElementById("label")

function hover(){
  const ball  = document.getElementById("ball")
  ball.style.animation = " ball 2s ease-in-out infinite alternate"
}

function unhover(){
  const ball  = document.getElementById("ball")
  ball.style.animation = "none"
}

label.addEventListener("mouseover", hover)
label.addEventListener("mouseout", unhover)