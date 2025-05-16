
const menuBtn = document.querySelector("#menu-btn"); 
const navMenu = document.querySelector("#animate-me");
menuBtn.addEventListener("click", () => { 
    menuBtn.classList.toggle("activate");
    navMenu.classList.toggle("activate");
})