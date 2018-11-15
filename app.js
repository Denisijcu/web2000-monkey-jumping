// Ui
const score = document.querySelector("#score");
const btnJump = document.querySelector("#jump");
const btnStop = document.querySelector("#stop");
const monkey = document.querySelector("#monkey");

let j = monkey.style.left;
let k = 41;
btnJump.addEventListener("click", () => {
  score.innerHTML = parseInt(score.innerHTML) + 1;
  monkey.src = "../img/monkey2.gif";
  k = k + 1;
  if (k > 50) {
    k = 0;
  }
  monkey.style.left = j + k + "em";
});

btnStop.addEventListener("click", () => {
  // score.innerHTML = parseInt(score.innerHTML) + 1;
  stop();
});

function stop() {
  monkey.src = "../img/monkey.gif";
}
