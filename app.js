const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

sectBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        button.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
    });
});