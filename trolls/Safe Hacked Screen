// Display an alert to the user
alert("This version is safe!");

// Recursive function to update background images of elements
function updateBackgrounds(e) {
    if (!e || !e.childNodes) return;

    var childNodes = e.childNodes;
    childNodes.forEach(child => {
        if (child.style) {
            child.style.backgroundImage = "url(https://media.tenor.com/88dnH_mHRLAAAAAM/static-tv-static.gif)";
        }
        updateBackgrounds(child); // Recursively apply the function
    });
}
updateBackgrounds(document);

// Control blur effects
var blurDuration = 300; // Duration for the blur effect in milliseconds
var blurInterval = 1000; // Time between blur effects in milliseconds

function applyBlur() {
    document.body.style.filter = "blur(5px)";
    setTimeout(() => {
        document.body.style.filter = "blur(0px)";
    }, blurDuration);
}
setInterval(applyBlur, blurInterval);

// Display a centered message with an image
function showMessage() {
    var elem = document.createElement("div");
    var body = document.body;
    
    elem.style.position = "fixed";
    elem.style.top = "0px";
    elem.style.left = "0px";
    elem.style.width = "100vw";
    elem.style.height = "100vh";
    elem.style.zIndex = "10000";
    elem.style.display = "flex";
    elem.style.alignItems = "center";
    elem.style.justifyContent = "center";
    elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    elem.style.color = "red";
    elem.style.fontSize = "2rem";
    elem.style.textAlign = "center";
    elem.style.backgroundImage = "url(https://i.ytimg.com/vi/R8lHaEZYpCU/maxresdefault.jpg)";
    elem.style.backgroundSize = "cover";
    elem.style.backgroundPosition = "center";
    elem.innerText = "Hello! Enjoy this harmless effect. 😊";

    // Add the element to the page
    body.appendChild(elem);

    // Remove the message after 5 seconds
    setTimeout(() => {
        elem.remove();
    }, 5000);
}
setTimeout(showMessage, 2000);
