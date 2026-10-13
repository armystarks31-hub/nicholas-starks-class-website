const button = document.querySelector("#button");
const message = document.querySelector("#message");

button.addEventListener("click", changeMessage);

function changeMessage() {

    message.textContent =
        "REALLY BRO! Can't you see I'm working here!";

    // AI-assisted code
    message.style.color = "white";

    document.body.style.backgroundColor = "black";

    button.style.backgroundColor = "red";
    button.style.color = "white";

    button.textContent = "I TOLD YOU!";
}// AI-assisted Scooby-Doo hover interaction

const scareArea = document.querySelector("#scare-area");
const gangScared = document.querySelector("#gang-scared");
const scoobyScared = document.querySelector("#scooby-scared");

scareArea.addEventListener("mouseenter", scareGang);
scareArea.addEventListener("mouseleave", resetGang);

function scareGang() {
    gangScared.style.display = "none";
    scoobyScared.style.display = "block";
}

function resetGang() {
    gangScared.style.display = "block";
    scoobyScared.style.display = "none";
}
// AI-assisted running animation

const runningGang = document.querySelector("#gang-running");

scareArea.addEventListener("click", runGang);

function runGang() {
    runningGang.classList.remove("run-across");

    // Restart the animation each time the image is clicked
    void runningGang.offsetWidth;

    runningGang.classList.add("run-across");
}// AI-assisted villain jump scare

const villain = document.querySelector("#villain");

scareArea.addEventListener("click", villainScare);

function villainScare() {
    villain.classList.remove("jump-scare");

    // Restart animation every time
    void villain.offsetWidth;

    villain.classList.add("jump-scare");
}// AI-assisted ghoul chase interaction

const ghoul = document.querySelector("#ghoul");
let ghoulChaseTimer;

scareArea.addEventListener("click", startGhoulChase);

function startGhoulChase() {
    clearTimeout(ghoulChaseTimer);

    ghoul.classList.remove("ghoul-chase");
    void ghoul.offsetWidth;

    // Give the gang a half-second head start.
    ghoulChaseTimer = setTimeout(function () {
        ghoul.classList.add("ghoul-chase");
    }, 500);
}