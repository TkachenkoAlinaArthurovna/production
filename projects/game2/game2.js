const player = document.querySelector("#player");
const coins = document.querySelectorAll(".coin");
const message = document.querySelector("#message");

let x = 20;
let y = 20;
let step = 10;
let collected = 0;

document.addEventListener("keydown", function (event) {
  let oldX = x;
  let oldY = y;

  if (event.key === "ArrowRight") {
    x += step;
  }

  if (event.key === "ArrowLeft") {
    x -= step;
  }

  if (event.key === "ArrowDown") {
    y += step;
  }

  if (event.key === "ArrowUp") {
    y -= step;
  }

  player.style.left = x + "px";
  player.style.top = y + "px";

  if (x < 0 || x > 660 || y < 0 || y > 360) {
    x = oldX;
    y = oldY;

    player.style.left = x + "px";
    player.style.top = y + "px";
  }

  coins.forEach(function (coin) {
    if (coin.style.display !== "none" && isTouching(player, coin)) {
      coin.style.display = "none";
      collected += 1;
    }
  });

  if (collected === 5) {
    message.textContent = "🎉 Ти зібрав усі монети! Перемога!";
  }
});

function isTouching(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
