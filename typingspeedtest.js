const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Coding is fun and improves problem-solving skills.",
    "Practice makes perfect when learning JavaScript.",
    "A journey of a thousand miles begins with a single step.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts."
];

const sentenceEl = document.getElementById("sentence");
const inputTextEl = document.getElementById("inputText");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const statsEl = document.getElementById("stats");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

let startTime, endTime, sentence;

function startTest() {
    sentence = sentences[Math.floor(Math.random() * sentences.length)]; // Get random sentence
    sentenceEl.innerHTML = sentence.split("").map(char => `<span>${char}</span>`).join("");
    inputTextEl.value = "";
    inputTextEl.disabled = false;
    inputTextEl.focus();
    startTime = new Date().getTime();
    
    // Show restart button and hide start button
    startBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    statsEl.classList.add("hidden");
}

// function para sa highlighted text
function updateTyping() {
    let typedText = inputTextEl.value;
    let sentenceChars = sentenceEl.querySelectorAll("span");

    let correctChars = 0;
    let incorrectChars = 0;

    for (let i = 0; i < sentenceChars.length; i++) {
        if (i < typedText.length) {
            if (typedText[i] === sentence[i]) {
                sentenceChars[i].classList.add("text-green-500");
                sentenceChars[i].classList.remove("text-red-500");
                correctChars++;
            } else {
                sentenceChars[i].classList.add("text-red-500");
                sentenceChars[i].classList.remove("text-green-500");
                incorrectChars++;
            }
        } else {
            sentenceChars[i].classList.remove("text-green-500", "text-red-500");
        }
    }

    let accuracy = Math.max(100 - (incorrectChars * 5), 0); // Deduct 5% per mistake
    accuracyEl.textContent = accuracy + "%";

    if (typedText === sentence) {
        endTest();
    }
}

function endTest() {
    let endTime = new Date().getTime();
    let totalTime = (endTime - startTime) / 1000; // Time in seconds
    let wordsTyped = sentence.split(/\s+/).length;
    let wpm = Math.round((wordsTyped / totalTime) * 60);

    wpmEl.textContent = wpm;
    statsEl.classList.remove("hidden");

    inputTextEl.disabled = true;
}

function restartTest() {
    inputTextEl.value = "";
    sentenceEl.textContent = "";
    startBtn.classList.remove("hidden");
    restartBtn.classList.add("hidden");
    statsEl.classList.add("hidden");
}

startBtn.addEventListener("click", startTest);
restartBtn.addEventListener("click", restartTest);
inputTextEl.addEventListener("input", updateTyping);