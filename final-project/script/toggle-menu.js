const toggleBtn = document.querySelector("#toggle-btn"); 
const menuItems = document.querySelector(".mobile-menu"); 

toggleBtn.addEventListener("click", ()=> { 
    toggleBtn.classList.toggle("activate");
    menuItems.classList.toggle("activate");
})