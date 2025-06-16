const openBtn = document.querySelector("#openBtn");
const dialogBox = document.querySelector("#dialogBox"); 
const closeBtn = document.querySelector("#closeBtn"); 

openBtn.addEventListener("click", () => {
    dialogBox.showModal(); 
})
closeBtn.addEventListener("click", () => { 
    dialogBox.close();
})