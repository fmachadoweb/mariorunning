const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!mario.classList.contains("jump")) {
    mario.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      mario.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let marioBottom = parseInt(
    window.getComputedStyle(mario).getPropertyValue("bottom")
  );
  let pipeLeft = parseInt(
    window.getComputedStyle(pipe).getPropertyValue("left")
  );

  if (pipeLeft > 40 && pipeLeft < 120 && marioBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
