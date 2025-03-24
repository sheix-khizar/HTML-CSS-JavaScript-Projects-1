// script.js
const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");

// Create grid cells
for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", function () {
        cell.style.backgroundColor = colorPicker.value; // Set cell color
    });
    canvas.appendChild(cell);
}

// Reset canvas
function clearCanvas() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "white"; // Reset color
    });
}
