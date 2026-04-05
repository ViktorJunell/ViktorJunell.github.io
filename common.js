var div = document.getElementById("header")


var button = document.createElement("div")
button.id = "home-button"
button.className = "button-class"

var text = document.createElement("a")
text.href = '/'
text.innerText = "Home"
button.append(text)

div.appendChild(button)



button = document.createElement("div")
button.id = "specialization-button"
button.className = "button-class"

text = document.createElement("a")
text.href = '/Specialization'
text.innerText = "Specilization"
button.append(text)

div.appendChild(button)



button = document.createElement("div")
button.id = "projects-button"
button.className = "button-class"

text = document.createElement("a")
// text.href = '/'
text.innerText = "Projects"
button.append(text)

var projects = document.createElement("ul")
projects.id = "projects"
button.append(projects)

var project = document.createElement("li")
project.id = "project-5"
project.className = "new-button-class"
text = document.createElement("a")
text.href = '/Projects/5'
text.innerText = "Project 5"
project.append(text)
projects.appendChild(project)

project = document.createElement("li")
project.id = "project-6"
project.className = "new-button-class"
text = document.createElement("a")
text.href = '/Projects/6'
text.innerText = "Project 6"
project.append(text)
projects.appendChild(project)

div.appendChild(button)


// reset an animated gif to start at first image without reloading it from server.
// Note: if you have the same image on the page more than ones, they all reset.
var transparent1PxGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
function resetGif(id) {
    var img = document.getElementById(id);
    var imageUrl = img.src;
    // img.src.clear();
    img.src = transparent1PxGif;
    img.offsetHeight;
    img.src = imageUrl;
};