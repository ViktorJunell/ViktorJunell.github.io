// class header extends HTMLElement 
// {
//     constructor() {
//       super();
//     //   var base = document.getElementById("header");
// // content = 
//     //   this = document.querySelector('link[rel="import"]').import
//     //   document.innerHTML = 
//     //   base.innerHTML = document.querySelector('test.html').import
//     //   let templateContent = template.content;

//     //   const shadowRoot = this.attachShadow({ mode: "open" });
//     //   shadowRoot.appendChild(document.importNode(templateContent, true));
//     }

// }
var div = document.createElement("div")
div.id = "header"
div.className = "header-class"

var homeButton = document.createElement("div")
homeButton.id = "home-button"
homeButton.className = "button-class"
specializationButton.addEventListener("click", () => {location.href='/'})
homeButton.innerText = "Home"

var specializationButton = document.createElement("div")
specializationButton.id = "specialization-button"
specializationButton.className = "button-class"
specializationButton.addEventListener("click", () => {location.href='/Test'})
specializationButton.innerText = "Specilization"
// specializationButton.onclick = 

var projectsButton = document.createElement("div")
projectsButton.id = "projects-button"
projectsButton.className = "button-class"
projectsButton.innerText = "Projects"
div.appendChild(homeButton)
div.appendChild(specializationButton)
div.appendChild(projectsButton)

document.body.appendChild(div)
// customElements.define("custom-header", header)
// document.getElementById("header").innerHTML = '<div id="header" class="header-class">\n    <div id="home-button" class="button-class">\n    <p>Home</p> \n    </div>\n    <div id="specialization-button" class="button-class" onclick="location.href=">\n    <p>Specialization</p> \n    </div>\n    <div id="projects-button" class="button-class">\n    <p>Game Projects</p> \n    </div>\n</div>'