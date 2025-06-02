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

async function member(){
    const membership = "https://kacharles.github.io/wdd230/chamber/data/members.json";
    const response = await fetch(membership);
    try{
        if (response.ok){
            const data = await response.json();
            // console.log(data)
            spotlight(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
member();
function spotlight(member){
    // const spotlight = document.querySelector("#spotlights");
    const already = new Set();
    
    for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * member['members'].length);
        const company = member['members'][randomIndex];
        const membership = company['ml']; 
        
        if (membership === "Silver" || membership === "Gold"){
            if (already.has(randomIndex)){
                index--;
                continue;
            }
        already.add(randomIndex);
        const main = document.querySelector(".grid"); 
        let sectionEle = document.createElement("section"); 
        let portrait = document.createElement("img"); 
        let heading = document.createElement("h3"); 
        let address = document.createElement("p");
        let url = document.createElement("p");
        
        // console.log(member.website);

        portrait.setAttribute("src", company.image);
        portrait.setAttribute("alt", company.name);

        heading.textContent = `${company.name}`; 
        address.textContent = `${company.address}`; 
        url.textContent = `${company.website}`;

        sectionEle.appendChild(portrait);
        sectionEle.appendChild(heading); 
        sectionEle.appendChild(address);
        sectionEle.appendChild(url); 
 
        main.appendChild(sectionEle);
        }
        else{
            if (index >= 0){
                index--;
            }
        }
    };

}


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

