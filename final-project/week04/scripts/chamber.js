const drop_menu = document.querySelector("#drop-down-menu"); 
const navList = document.querySelector("#navigation"); 

drop_menu.addEventListener("click", () => {
    drop_menu.classList.toggle("activate");
    navList.classList.toggle("activate");
})

const copy_right = document.querySelector("#copyright")
const last_modified = document.querySelector("#lastModified")

copy_right.innerHTML = `&copy; ${new Date().getFullYear()} 🌴 Charles Alfred Koenig 🌴 Monrovia, Liberia.</span>`;
last_modified.textContent = "Last Modified: " + document.lastModified;