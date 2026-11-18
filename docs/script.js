console.log("My QR Code project is connected!");

const heading = document.querySelector("#main-heading");
const button = document.querySelector("#change-heading-btn");
const backgroundButton = document.querySelector("#change-background-btn");

let headingChanged = false;
let thisIsCoolElement = null;

let backgroundColorChanged = false;


button.addEventListener("click", function() {

    if (headingChanged === false) {
        heading.textContent = "This is Cool!";
        heading.style.color = "#2C7DFC";
        headingChanged = true;

    } else {
        heading.textContent = "Improve your front-end skills";
        heading.style.color = "#1f314f";
        headingChanged = false;
    }

});

backgroundButton.addEventListener("click", function() {

    if (backgroundColorChanged === false) {
        document.body.style.backgroundColor = "#2C7DFC";
        backgroundColorChanged = true;

    } else {
        document.body.style.backgroundColor = "#d5e1ef";
        backgroundColorChanged = false;
    }
});








