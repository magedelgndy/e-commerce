"use strict"

const close = document.getElementById("close");
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
