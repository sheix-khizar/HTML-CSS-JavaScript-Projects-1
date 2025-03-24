let changeColor = function() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
};

let button = document.getElementById("btn");
button.addEventListener("click", changeColor); // Pass function reference, don't call it
