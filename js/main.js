let numberOfAttempts = document.querySelector("#numberOfAttempts");
let count = document.querySelector(".count");
let result = document.querySelector("#result");
let enterText = document.querySelector("#enterText");
let timeId = document.querySelector(".time");
let temp = document.querySelector(".temp");
temp.hidden = true;

let step = 0;   // количество попыток

let timer = 0;
let time = 0;

let randomValue = Math.floor(Math.random() * 101); // випадкове значення від 0 до 100 буде записано в змінну randomValue.

document.body.addEventListener("keydown", (e) => { if (e.key == "Enter") game() });
document.querySelector("#enterBtn").addEventListener("click", game);

let start = document.querySelector("#start");
start.addEventListener("click", function () {
    timer = setInterval(() => {
        time++;
        timeId.textContent = time;
    }, 1000);

    temp.hidden = false;
    enterText.focus();
    start.hidden = true;
})

result.innerHTML = "Вгадай число вiд 0 до 100.";

function game() {

    result.innerHTML = "";
    step++;
    let yourNumber = Number(enterText.value);

    count.textContent = step;

    if (randomValue > yourNumber) {
        result.innerHTML = `число бiльше нiж ${yourNumber}`;
    } else {
        if (randomValue < yourNumber) {
            result.innerHTML = `число меньше нiж ${yourNumber}`;
        } else {
            if (randomValue == yourNumber) {
                clearInterval(timer);
                result.classList.add("win");
                result.innerHTML = `Вiтаю. <br> Ты вгадав число ${randomValue} за ${step} спроб.<br> Час гри ${time} секунди`;
            }

        }
    }
    enterText.value = "";
}
