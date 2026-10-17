const burgerMenu = document.getElementById("menu");
console.log(burgerMenu);
const menu = document.querySelector(".menu");
console.log(menu);

burgerMenu.addEventListener("click", function () {
  menu.classList.add("active");
});

const close = document.getElementById("close");
close.addEventListener("click", function () {
  menu.classList.remove("active");
});
