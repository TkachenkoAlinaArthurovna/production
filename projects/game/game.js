const player = document.querySelector("#player");
const finish = document.querySelector("#finish");
const message = document.querySelector("#message");
const walls = document.querySelectorAll(".wall");

let x = 20;
let y = 20;
let step = 10;

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

  if (x < 0 || x > 660 || y < 0 || y > 370) {
    x = oldX;
    y = oldY;
    player.style.left = x + "px";
    player.style.top = y + "px";
  }

  walls.forEach(function (wall) {
    if (isTouching(player, wall)) {
      x = oldX;
      y = oldY;
      player.style.left = x + "px";
      player.style.top = y + "px";
      message.textContent = "You hit the wall!";
    }
  });

  if (isTouching(player, finish)) {
    message.textContent = "You win!";
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

isTouching(player, finish);
