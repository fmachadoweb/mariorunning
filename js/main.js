/* 
MARIO RUNNING (GAME) V4.0
Coded By: https://github.com/fmachadoweb
*/

let container = document.querySelector("#container");
let player = document.querySelector("#player");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 6s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 20);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (player.classList != "playerActive") {
            player.classList.add("playerActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                player.classList.remove("playerActive");
            }, 500);
        }
});

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let playerBottom = parseInt(getComputedStyle(player).getPropertyValue("bottom"));
    //    console.log("playerBottom" + playerBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (playerBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
