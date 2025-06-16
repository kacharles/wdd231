// alert("working");

const timeStamp = document.querySelector("#stamp"); 
timeStamp.value = new Date(); 

const dateTime = document.querySelector("#TimeStamp");
dateTime.value = new Date(); 

// dateTime.value = new Date();
// dateTime.textContent = "You and me";


// subBtn.addEventListener("click", () => {
    // if (password.value == repeatpass.value) { 

      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        // document.getElementById("message").textContent = "Submitting..";
        document.getElementById("submit").textContent = "Signing up...";
        document.getElementById("message").style.display = "block";
        document.getElementById("submit").disabled = true;
    
        // Collect the form data
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + "=" + pair[1]);
        }
    
        var formDataString = keyValuePairs.join("&");
    
        // Send a POST request to your Google Apps Script
        fetch(
          "https://script.google.com/macros/s/AKfycbyothJOCmKqdrfoHdXVlfzc2lG1WJjXFXGIdfSwkwlm7SSwOpJs4ibe1xV7Uhqm7n31/exec",
          {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        )
          .then(function (response) {
            // Check if the request was successful
            if (response) {
              return response; // Assuming your script returns JSON response
            } else {
              throw new Error("Failed to submit the form.");
            }
          })
          .then(function (data) {
            // Display a success message
            // document.getElementById("message").textContent =
            //   "Data submitted successfully!";
            alert("Thank you for your interest in BYU-Pathway Worldwide. We have received your request and will get back to you soon with in 24-hours.Please do not send another request. We will get back to you soon. Thank you 🙏.");
            document.getElementById("message").style.display = "block";
            document.getElementById("message").style.backgroundColor = "green"; 
            document.getElementById("message").style.color = "beige";
            document.getElementById("submit").disabled = false;
            document.querySelector("#submit").textContent = "Sign up";
            document.querySelector("#data").reset();
    
            setTimeout(function () {
              document.getElementById("message").textContent = "";
              document.getElementById("message").style.display = "none";
            }, 2600);
          })
          .catch(function (error) {
            // Handle errors, you can display an error message here
            console.error(error);
            document.getElementById("message").textContent =
              "An error occurred while submitting the form.";
            document.getElementById("message").style.display = "block";
          });
      });

    
      // console.log(new Date());
    
//     else { 
//         message.textContent = "Password does not match. Please try again.";
//         message.style.display = "block";
//         message.style.backgroundColor = "red";
//         message.style.color = "white";
//         message.style.padding = "1rem";
//         message.style.margin = "1.5rem";
//         repeatpass.focus();
//         password.value = ""; 
//         repeatpass.value = "";
//         setTimeout(function() {
//           document.getElementById("message").textContent = "";
//           document.getElementById("message").style.display = "none";
//         }, 3000);
        
//    }
// })
