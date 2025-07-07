import { degrees } from "./cert-degree.js";
// console.log(degre);

const byuiDegrees = degrees.filter(degree => degree.degreeType === 'BYU-I');
const ensignDegrees = degrees.filter(degree => degree.degreeType === 'Ensign');
const all = document.querySelector("#all"); 
const byui = document.querySelector("#byui"); 
const ensign = document.querySelector("#ensign");


const url = "https://kacharles.github.io/sign-up/data/cert-degree.json"; 

export async function getData(url) {
  let newDegree;
    try {
        const response = await fetch(url); 
        const degrees = await response.json(); 
        newDegree = degrees;
        populateHtml(degrees);
    } catch (error) {
        console.log(error)
    }
    function getDegree() { 
      return newDegree; 
    }
    return getDegree();
}

getData(url);
function populateHtml(degrees) { 
      degrees.forEach(degree => {
          // create a list of parent elements to be used. 
          const degre = document.createElement("div");
          const degreeSection = document.createElement("div");
          const degreeTitle = document.createElement("h2"); 
          const mainSection = document.createElement("div");
          // const certSection = document.createElement("div"); 
          // const coursesSection = document.createElement("div"); 
          // const headerDiv = document.createElement("div");

          // Add class and id attributes to the created elements
          degre.id = "degree";
          degreeSection.id = "degree-sec"; 
          mainSection.classList.add("main-sec");
          // certSection.classList.add("cert-sect"); 
          // coursesSection.classList.add("courses");
          degreeTitle.classList.add("title"); // h2 element
          // headerDiv.classList.add("heading");

          // assigning array values
          degreeTitle.textContent = `Bachelor's of Science in ${degree.title}`;

          
        degree.certificate.forEach(cert => {
          //Create a list of child elements to be used
          const certType = document.createElement("span");
          const certName = document.createElement("h3");
          const headerDiv = document.createElement("div");
          const mainCourseSection = document.createElement("div");
          const certSection = document.createElement("div"); 
          const emptyRow = document.createElement("div");

         //Add attributes to child elements 
          certType.classList.add("certType"); // span element
          certName.classList.add("certName"); // h3 element
          headerDiv.classList.add("courses");
          mainCourseSection.classList.add("main-courses");
          certSection.classList.add("cert-sect"); 
          emptyRow.classList.add("emptyRow");

          certType.textContent = `${cert.certType}`;
          certName.textContent = `${cert.certName}`;
          // certSection.append(certType, certName);
          // mainSection.appendChild(certSection)

          const code = document.createElement("span"); 
          const cname = document.createElement("span");
          const credits = document.createElement("span");

          const col1 = document.createElement("span"); 
          const col2 = document.createElement("span");
          const col3 = document.createElement("span"); 

          col2.textContent = "Total";

          code.textContent = cert.codeH;
          cname.textContent = cert.nameH;
          credits.textContent = cert.creditH;
          headerDiv.append(code, cname, credits);
          emptyRow.append(col1, col2, col3);

          certSection.appendChild(certType);
          certSection.appendChild(certName);
          certSection.appendChild(headerDiv);

          const creditTotals = degree.certificate.map(cert => ({
          certName: cert.certName,
          totalCredits: cert.course.reduce((sum, course) => sum + course.credit, 0)

          }));

          // const totalCreditsArray = creditTotals.map(item => item.totalCredits);
          // col3.textContent = totalCreditsArray;
         
         

          // console.log(creditTotals);
          
          // certSection.append(code, cname, credits);

          cert.course.forEach(courses => {

          const courseCode = document.createElement("span"); 
          const courseName = document.createElement("span"); 
          const numCredits = document.createElement("span");

          courseCode.textContent = `${courses.code}`;
          courseName.textContent = `${courses.name}`;
          numCredits.textContent = `${courses.credit}`;

          mainCourseSection.append(courseCode, courseName, numCredits);

          })
          // certSection.appendChild(emptyRow);

          certSection.appendChild(mainCourseSection);
          certSection.appendChild(emptyRow);
          mainSection.appendChild(certSection);
         

        })

            
            degreeSection.appendChild(degreeTitle);
            degreeSection.append(mainSection);
            degre.appendChild(degreeSection);
            const mainElement = document.querySelector("main"); 
            // mainElement.appendChild(degre);
            // mainElement.appendChild(certSection);
            // mainElement.appendChild(coursesSection);
            mainElement.appendChild(degre);
            // const byui = document.querySelector("#byui");
            // byui.addEventListener("click", ()=> {
            // mainElement.innerHTML = "";
            // const byuiDegree = degree.filter(d=>d.degreeType === "BYU-I");
            // //Remove codes from here
            // byuiDegree.forEach(ndegree => {
            //   mainElement.innerHTML = "Working, but not as I want";
            // })
            // })
      })
}

// const degrees = getData.degrees;

// populateHtml();


byui.addEventListener("click", () => {
  const mainElement = document.querySelector("main");
  mainElement.innerHTML = "";
  byuiDegrees.forEach(degree => {

        // create a list of parent elements to be used. 
          const degre = document.createElement("div");
          const degreeSection = document.createElement("div");
          const degreeTitle = document.createElement("h2"); 
          const mainSection = document.createElement("div");
          // const certSection = document.createElement("div"); 
          // const coursesSection = document.createElement("div"); 
          // const headerDiv = document.createElement("div");

          // Add class and id attributes to the created elements
          degre.id = "degree";
          degreeSection.id = "degree-sec"; 
          mainSection.classList.add("main-sec");
          // certSection.classList.add("cert-sect"); 
          // coursesSection.classList.add("courses");
          degreeTitle.classList.add("title"); // h2 element
          // headerDiv.classList.add("heading");

          // assigning array values
          degreeTitle.textContent = `Bachelor's of Science in ${degree.title}`;

          
        degree.certificate.forEach(cert => {
          //Create a list of child elements to be used
          const certType = document.createElement("span");
          const certName = document.createElement("h3");
          const headerDiv = document.createElement("div");
          const mainCourseSection = document.createElement("div");
          const certSection = document.createElement("div"); 
          const emptyRow = document.createElement("div");

         //Add attributes to child elements 
          certType.classList.add("certType"); // span element
          certName.classList.add("certName"); // h3 element
          headerDiv.classList.add("courses");
          mainCourseSection.classList.add("main-courses");
          certSection.classList.add("cert-sect"); 
          emptyRow.classList.add("emptyRow");

          certType.textContent = `${cert.certType}`;
          certName.textContent = `${cert.certName}`;
          // certSection.append(certType, certName);
          // mainSection.appendChild(certSection)

          const code = document.createElement("span"); 
          const cname = document.createElement("span");
          const credits = document.createElement("span");

          const col1 = document.createElement("span"); 
          const col2 = document.createElement("span");
          const col3 = document.createElement("span"); 

          col2.textContent = "Total";

          code.textContent = cert.codeH;
          cname.textContent = cert.nameH;
          credits.textContent = cert.creditH;
          headerDiv.append(code, cname, credits);
          emptyRow.append(col1, col2, col3);

          certSection.appendChild(certType);
          certSection.appendChild(certName);
          certSection.appendChild(headerDiv);

          const creditTotals = degree.certificate.map(cert => ({
          certName: cert.certName,
          totalCredits: cert.course.reduce((sum, course) => sum + course.credit, 0)

          }));

          creditTotals.forEach(certi => {
            col3.textContent = certi.totalCredits;
          })

          // console.log(creditTotals);
          
          // certSection.append(code, cname, credits);

          cert.course.forEach(courses => {

          const courseCode = document.createElement("span"); 
          const courseName = document.createElement("span"); 
          const numCredits = document.createElement("span");

          courseCode.textContent = `${courses.code}`;
          courseName.textContent = `${courses.name}`;
          numCredits.textContent = `${courses.credit}`;

          mainCourseSection.append(courseCode, courseName, numCredits);

          })
          // certSection.appendChild(emptyRow);

          certSection.appendChild(mainCourseSection);
          certSection.appendChild(emptyRow);
          mainSection.appendChild(certSection);
         

        })

            
            degreeSection.appendChild(degreeTitle);
            degreeSection.append(mainSection);
            degre.appendChild(degreeSection);
            const mainElement = document.querySelector("main"); 
            // mainElement.appendChild(degre);
            // mainElement.appendChild(certSection);
            // mainElement.appendChild(coursesSection);
            mainElement.appendChild(degre);

  })
 
})

ensign.addEventListener("click", ()=> {
  const mainElement = document.querySelector("main");
  mainElement.innerHTML = ""; 

  ensignDegrees.forEach(degree => {
        // create a list of parent elements to be used. 
          const degre = document.createElement("div");
          const degreeSection = document.createElement("div");
          const degreeTitle = document.createElement("h2"); 
          const mainSection = document.createElement("div");
          // const certSection = document.createElement("div"); 
          // const coursesSection = document.createElement("div"); 
          // const headerDiv = document.createElement("div");

          // Add class and id attributes to the created elements
          degre.id = "degree";
          degreeSection.id = "degree-sec"; 
          mainSection.classList.add("main-sec");
          // certSection.classList.add("cert-sect"); 
          // coursesSection.classList.add("courses");
          degreeTitle.classList.add("title"); // h2 element
          // headerDiv.classList.add("heading");

          // assigning array values
          degreeTitle.textContent = `Bachelor's of Science in ${degree.title}`;

          
        degree.certificate.forEach(cert => {
          //Create a list of child elements to be used
          const certType = document.createElement("span");
          const certName = document.createElement("h3");
          const headerDiv = document.createElement("div");
          const mainCourseSection = document.createElement("div");
          const certSection = document.createElement("div"); 
          const emptyRow = document.createElement("div");

         //Add attributes to child elements 
          certType.classList.add("certType"); // span element
          certName.classList.add("certName"); // h3 element
          headerDiv.classList.add("courses");
          mainCourseSection.classList.add("main-courses");
          certSection.classList.add("cert-sect"); 
          emptyRow.classList.add("emptyRow");

          certType.textContent = `${cert.certType}`;
          certName.textContent = `${cert.certName}`;
          // certSection.append(certType, certName);
          // mainSection.appendChild(certSection)

          const code = document.createElement("span"); 
          const cname = document.createElement("span");
          const credits = document.createElement("span");

          const col1 = document.createElement("span"); 
          const col2 = document.createElement("span");
          const col3 = document.createElement("span"); 

          col2.textContent = "Total";

          code.textContent = cert.codeH;
          cname.textContent = cert.nameH;
          credits.textContent = cert.creditH;
          headerDiv.append(code, cname, credits);
          emptyRow.append(col1, col2, col3);

          certSection.appendChild(certType);
          certSection.appendChild(certName);
          certSection.appendChild(headerDiv);

          const creditTotals = degree.certificate.map(cert => ({
          certName: cert.certName,
          totalCredits: cert.course.reduce((sum, course) => sum + course.credit, 0)

          }));

          creditTotals.forEach(certi => {
            col3.textContent = certi.totalCredits;
          })

          // console.log(creditTotals);
          
          // certSection.append(code, cname, credits);

          cert.course.forEach(courses => {

          const courseCode = document.createElement("span"); 
          const courseName = document.createElement("span"); 
          const numCredits = document.createElement("span");

          courseCode.textContent = `${courses.code}`;
          courseName.textContent = `${courses.name}`;
          numCredits.textContent = `${courses.credit}`;

          mainCourseSection.append(courseCode, courseName, numCredits);

          })
          // certSection.appendChild(emptyRow);

          certSection.appendChild(mainCourseSection);
          certSection.appendChild(emptyRow);
          mainSection.appendChild(certSection);
         

        })

            
            degreeSection.appendChild(degreeTitle);
            degreeSection.append(mainSection);
            degre.appendChild(degreeSection);
            const mainElement = document.querySelector("main"); 
            // mainElement.appendChild(degre);
            // mainElement.appendChild(certSection);
            // mainElement.appendChild(coursesSection);
            mainElement.appendChild(degre);
  })

})

all.addEventListener("click", () => {
  const main = document.querySelector("main");
  main.innerHTML = ""; 

        degrees.forEach(degree => {
          // create a list of parent elements to be used. 
          const degre = document.createElement("div");
          const degreeSection = document.createElement("div");
          const degreeTitle = document.createElement("h2"); 
          const mainSection = document.createElement("div");
          // const certSection = document.createElement("div"); 
          // const coursesSection = document.createElement("div"); 
          // const headerDiv = document.createElement("div");

          // Add class and id attributes to the created elements
          degre.id = "degree";
          degreeSection.id = "degree-sec"; 
          mainSection.classList.add("main-sec");
          // certSection.classList.add("cert-sect"); 
          // coursesSection.classList.add("courses");
          degreeTitle.classList.add("title"); // h2 element
          // headerDiv.classList.add("heading");

          // assigning array values
          degreeTitle.textContent = `Bachelor's of Science in ${degree.title}`;

          
        degree.certificate.forEach(cert => {
          //Create a list of child elements to be used
          const certType = document.createElement("span");
          const certName = document.createElement("h3");
          const headerDiv = document.createElement("div");
          const mainCourseSection = document.createElement("div");
          const certSection = document.createElement("div"); 
          const emptyRow = document.createElement("div");

         //Add attributes to child elements 
          certType.classList.add("certType"); // span element
          certName.classList.add("certName"); // h3 element
          headerDiv.classList.add("courses");
          mainCourseSection.classList.add("main-courses");
          certSection.classList.add("cert-sect"); 
          emptyRow.classList.add("emptyRow");

          certType.textContent = `${cert.certType}`;
          certName.textContent = `${cert.certName}`;
          // certSection.append(certType, certName);
          // mainSection.appendChild(certSection)

          const code = document.createElement("span"); 
          const cname = document.createElement("span");
          const credits = document.createElement("span");

          const col1 = document.createElement("span"); 
          const col2 = document.createElement("span");
          const col3 = document.createElement("span"); 

          col2.textContent = "Total";

          code.textContent = cert.codeH;
          cname.textContent = cert.nameH;
          credits.textContent = cert.creditH;
          headerDiv.append(code, cname, credits);
          emptyRow.append(col1, col2, col3);

          certSection.appendChild(certType);
          certSection.appendChild(certName);
          certSection.appendChild(headerDiv);

          const creditTotals = degree.certificate.map(cert => ({
          certName: cert.certName,
          totalCredits: cert.course.reduce((sum, course) => sum + course.credit, 0)

          }));

          creditTotals.forEach(certi => {
            col3.textContent = certi.totalCredits;
          })

          // console.log(creditTotals);
          
          // certSection.append(code, cname, credits);

          cert.course.forEach(courses => {

          const courseCode = document.createElement("span"); 
          const courseName = document.createElement("span"); 
          const numCredits = document.createElement("span");

          courseCode.textContent = `${courses.code}`;
          courseName.textContent = `${courses.name}`;
          numCredits.textContent = `${courses.credit}`;

          mainCourseSection.append(courseCode, courseName, numCredits);

          })
          // certSection.appendChild(emptyRow);

          certSection.appendChild(mainCourseSection);
          certSection.appendChild(emptyRow);
          mainSection.appendChild(certSection);
         

        })
            degreeSection.appendChild(degreeTitle);
            degreeSection.append(mainSection);
            degre.appendChild(degreeSection);
            const mainElement = document.querySelector("main"); 
            mainElement.appendChild(degre);
           
      })
})


