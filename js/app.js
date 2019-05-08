const logo = document.querySelector(".logo");
const border = document.querySelector(".mainHeader__border");

const moveLogo = () => {
    console.log('działa scroll');
    logo.classList.add("logoMove");
    border.classList.add("borderMove");

}



window.addEventListener("mousemove", moveLogo);