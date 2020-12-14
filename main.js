const play = document.querySelector(".btn-play");
const link = document.querySelector(".play-pause-link");

let sound = new Howl({
  src: ["sounds/Baby FuzZ - Cig.m4a"],
  volume: 1
});
let id = 0;
let count = 0;

play.addEventListener("click", () => {
  if (count % 2 == 0) {
    count++;
    id = sound.play();
    link.setAttribute("href", "images/sprite.svg#icon-controller-paus");
  } else {
    count--;
    sound.pause(id);
    link.setAttribute("href", "images/sprite.svg#icon-controller-play");
  }
});
