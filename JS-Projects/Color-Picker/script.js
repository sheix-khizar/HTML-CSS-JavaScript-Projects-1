// script.js

// Update the color preview and values dynamically
document.getElementById("colorInput").addEventListener("input", function () {
    let color = this.value;
    document.querySelector(".color-box").style.backgroundColor = color;
    document.getElementById("hexValue").textContent = color;

    // Convert HEX to RGB
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    document.getElementById("rgbValue").textContent = `rgb(${r}, ${g}, ${b})`;
});

// Function to copy text to clipboard
function copyText(elementId) {
    let text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        let message = `${text} copied to clipboard!`;
        document.getElementById("copyMessage").textContent = message;

        // Clear the message after 2 seconds
        setTimeout(() => {
            document.getElementById("copyMessage").textContent = "";
        }, 2000);
    });
}
