"use script";


// let addToCart = document.getElementById("ooo");
let addToCart = document.querySelectorAll(".fa-shopping-cart");
let add = document.querySelector("#valuecart");


addToCart.forEach(element => {
  element.addEventListener("click", () => {
    // Number(add.innerHTML)++;
    let numadd = Number(add.innerHTML) + 1;
    add.innerHTML = numadd;
  });
});