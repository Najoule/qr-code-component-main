console.log("My QR Code project is connected!");

const heading = document.querySelector("#main-heading");
const button = document.querySelector("#change-heading-btn");

let headingChanged = false;

button.addEventListener("click", function() {

    if (headingChanged === false) {
        heading.textContent = "This is Cool!";
        headingChanged = true;
    } else {
        heading.textContent = "Improve your front-end skills";
        headingChanged = false;
    }

});









