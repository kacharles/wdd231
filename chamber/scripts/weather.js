//select all html elements in the document 
const myTown = document.querySelector("#town"); 
const description = document.querySelector("#description"); 
const temperature = document.querySelector("#temperature"); 
const graphic = document.querySelector("#graphic"); 
// const forecast1 = document.querySelector("#forecast1"); 
// const forecast2 = document.querySelector("#forecast2"); 
// const forecast3 = document.querySelector("#forecast3"); 
// const forecast4 = document.querySelector("#forecast4");
// const forecast5 = document.querySelector("#forecast5"); 


const fcimg1 = document.querySelector("#fc-img-one");
const fctemp1 = document.querySelector("#fc-temp-one");
const fcdt1 = document.querySelector("#fc-dt-one");    

const fcimg2 = document.querySelector("#fc-img-two");
const fctemp2 = document.querySelector("#fc-temp-two");
const fcdt2 = document.querySelector("#fc-dt-two");    

const fcimg3 = document.querySelector("#fc-img-three");
const fctemp3 = document.querySelector("#fc-temp-three");
const fcdt3 = document.querySelector("#fc-dt-three");  

const fcimg4 = document.querySelector("#fc-img-four");
const fctemp4 = document.querySelector("#fc-temp-four");
const fcdt4 = document.querySelector("#fc-dt-four"); 

const fcimg5 = document.querySelector("#fc-img-five");
const fctemp5 = document.querySelector("#fc-temp-five");
const fcdt5 = document.querySelector("#fc-dt-five");    

const myKey = "c1bd126619feed8c7129bbdeb90eed16"; 
const myLat = "6.247169804803506"; 
const myLong = "-10.675933002156956"; 

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;

//Fetching the current weather API 

async function apiFetch() { 
    try { 
    const response = await fetch(myURL); 
    const res = await fetch(forecast);
    if(response.ok) { 
        const data = await response.json(); 
        const data_info = await res.json();
        console.log(data);
        console.log(data_info);
        displayResults(data, data_info);

    }
    else { 
        throw Error(await response.text()); 
    }
} catch (error) { 
    console.log(error);
}
}

apiFetch(); 
// Display the Json data onto my web page 

function displayResults(data, data1) { 
    // alert("Displaying...");
    myTown.textContent = data.name;
    myTown.textContent = "ELWA Junction";
    description.innerHTML = data.weather[0].description; 
    temperature.innerHTML = `${data.main.temp}&deg;F`; 
    description.style.textTransform =  "capitalize";
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    graphic.setAttribute('src', iconsrc); 
    graphic.setAttribute('alt', data.weather[0].description);

    // const imgsrc = `https://openweathermap.org/img/w/${list[0].weather[0].icon}.png`;
    // fcimg1.setAttribute("src", imgsrc);
    // fcimg1.setAttribute("alt", data1.list[0].weather[0].description);
   
    const iconsrc1 = `https://openweathermap.org/img/wn/${data1.list[0].weather[0].icon}@2x.png`;
    fcimg1.setAttribute("alt", data1.list[0].weather[0].description);
    fcimg1.setAttribute("src", iconsrc1);
    fctemp1.innerHTML = `${data1.list[0].main.temp}&deg;F`;
    fcdt1.innerHTML = `${data1.list[0].dt_txt.split(" ")[0]}`;

    const iconsrc2 = `https://openweathermap.org/img/wn/${data1.list[8].weather[0].icon}@2x.png`;
    fcimg2.setAttribute("alt", data1.list[8].weather[0].description);
    fcimg2.setAttribute("src", iconsrc2);
    fctemp2.innerHTML = `${data1.list[8].main.temp}&deg;F`;
    fcdt2.innerHTML = `${data1.list[8].dt_txt.split(" ")[0]}`;

    const iconsrc3 = `https://openweathermap.org/img/wn/${data1.list[16].weather[0].icon}@2x.png`;
    fcimg3.setAttribute("alt", data1.list[16].weather[0].description);
    fcimg3.setAttribute("src", iconsrc3);
    fctemp3.innerHTML = `${data1.list[16].main.temp}&deg;F`;
    fcdt3.innerHTML = `${data1.list[16].dt_txt.split(" ")[0]}`;
   

    // forecast1.textContent = data1.list[0].dt_txt.split(" ")[0]; 
    // forecast2.textContent = data1.list[8].dt_txt.split(" ")[0]; 
    // forecast3.textContent = data1.list[16].dt_txt.split(" ")[0]; 
    // forecast4.textContent = data1.list[24].dt_txt.split(" ")[0]; 
    // forecast5.textContent = data1.list[32].dt_txt.split(" ")[0]; 
}  