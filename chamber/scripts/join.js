
const signUpBtn = document.querySelector("#submit"); 
signUpBtn.addEventListener("click", () => {
    const timeStamp = document.querySelector("#timestamp"); 
    timeStamp.value = new Date();

    // setTimeout(function() {
    //     signUpBtn.textContent = "Signing up...";
    //     signUpBtn.enable = false; 
    // }, 2600)
});

