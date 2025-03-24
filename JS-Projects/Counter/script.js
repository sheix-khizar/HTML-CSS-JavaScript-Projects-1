let count = 0;
let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
});