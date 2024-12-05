const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeButton = document.querySelector(".close");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
    menu.classList.remove("active");
});
