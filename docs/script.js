console.log("My QR Code project is connected!");

const heading = document.querySelector("#main-heading");
const button = document.querySelector("#change-heading-btn");

button.addEventListener("click", function() {
    heading.textContent = "This is Cool!"
});

const resetBtn = document.querySelector("#reset-heading-btn");

resetBtn.addEventListener("click", function() {
    heading.textContent = "Improve your front-end skills"
})


