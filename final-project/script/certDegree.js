export const url = "https://kacharles.github.io/sign-up/data/cert-degree.json"; 

export async function getData(url) {
    try {
        const response = await fetch(url); 
        const degrees = await response.json(); 
        populateHtml(degrees);
    } catch (error) {
        console.log(error)
    }
}