const logo = document.querySelector(".logo");
const border = document.querySelector(".mainHeader__border");
const burger = document.querySelector(".button--menu");
const menu = document.querySelector(".menu");
const burgerLine1 = document.querySelector(".line1");
const burgerLine2 = document.querySelector(".line2");
const burgerLine3 = document.querySelector(".line3");

const lines = document.querySelector(".button__lines");


const moveLogo = () => {
    console.log('działa scroll');
    logo.classList.add("logoMove");
    border.classList.add("borderMove");
    burger.classList.add("showMenuBtn");
}

const showMenu = () => {
    lines.classList.toggle("active");
    menu.classList.toggle("showMenu");

}

burger.addEventListener("click", showMenu);
window.addEventListener("mousemove", moveLogo);