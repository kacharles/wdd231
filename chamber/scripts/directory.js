

const url = "https://kacharles.github.io/wdd230/chamber/data/members.json"; 
console.log(url);

async function getData() { 
    const response = await fetch(url); 
    const data = await response.json(); 
    console.log(data); 
    displayInfo(data.members);
    
}

displayInfo = (members) => { 
    members.forEach((member) => { 
        const main = document.querySelector(".grid"); 
        let sectionEle = document.createElement("section"); 
        let portrait = document.createElement("img"); 
        let heading = document.createElement("h3"); 
        let address = document.createElement("p");
        let url = document.createElement("p");
        
        // console.log(member.website);

        portrait.setAttribute("src", member.image);
        portrait.setAttribute("alt", member.name);

        heading.textContent = `${member.name}`; 
        address.textContent = `${member.address}`; 
        url.textContent = `${member.website}`;

        sectionEle.appendChild(portrait);
        sectionEle.appendChild(heading); 
        sectionEle.appendChild(address);
        sectionEle.appendChild(url); 
 
        main.appendChild(sectionEle);
        //alert('This is a function');
        // main.textContent = "Main Content";
    });
}
getData();

const gridbutton = document.querySelector("#gridv");
const listbutton = document.querySelector("#listv");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
    // alert("button is clicked");
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    // alert("button is clicked")
	display.classList.add("list");
	display.classList.remove("grid");
}
