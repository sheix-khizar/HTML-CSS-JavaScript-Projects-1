// script.js
const emojis = [
    { emoji: "😀", name: "Grinning Face" },
    { emoji: "😂", name: "Face with Tears of Joy" },
    { emoji: "😍", name: "Heart Eyes" },
    { emoji: "🤩", name: "Star-Struck" },
    { emoji: "😎", name: "Cool Face" },
    { emoji: "🤔", name: "Thinking Face" },
    { emoji: "🙌", name: "Raising Hands" },
    { emoji: "🎉", name: "Party Popper" },
    { emoji: "🔥", name: "Fire" },
    { emoji: "💖", name: "Sparkling Heart" }
];

function generateEmoji() {
    let randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById("emojiDisplay").textContent = emojis[randomIndex].emoji;
    document.getElementById("emojiName").textContent = emojis[randomIndex].name;
}
