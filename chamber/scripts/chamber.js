// Implementing the Drop-down menu function
// alert("Working!")
const menuBtn = document.querySelector("button"); 
const mobileMenu = document.querySelector("#mobile-menu"); 

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("activate");
    mobileMenu.classList.toggle("activate");
});

// Dynamically adding the footer to the page 

const copyright = document.querySelector("#copyright");
const lastModified = document.querySelector("#lastModified");

copyright.innerHTML = `&copy; ${new Date().getFullYear()} | Charles Alfred Koenig | WDD 231 Web Frontend Development</span>`;
lastModified.textContent = "Last Updated: " + document.lastModified;

// Implementing localStorage 

// const firstVisit = document.querySelector("#first-visit");
// const recentVisit = document.querySelector("#recent-visit"); 
// const firstDate = new Date(); 
// const recentDate = Date.now(); 
// const msToDays = 86400000;

// let numVisit = Number(window.localStorage.getItem("key1")); 

// // while(numVisit == 0) { 
// //     let storeDate = firstDate.getDate();
// // }

// if (numVisit == 0) { 
//     firstVisit.textContent = `Welcome! Let us know if you have any questions.`;
//     let storeDate = firstDate.getDate(); 
// }

// else { 
//     firstVisit.textContent = numVisit;
// }


// numVisit++;

// localStorage.setItem("key1", numVisit);

