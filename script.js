"use strict";
//
//Starting Elements
console.log("sdddf");
const player1 = document.querySelector(".active-player");
const player2 = document.querySelector(".active-player2");
const dice1 = document.querySelector(".dice");
const dice2 = document.querySelector(".dice2");
const roll1 = document.querySelector(".btn-roll1");
const roll2 = document.querySelector(".btn-roll2");
const newgamebtn = document.querySelector(".btn-new");
const winner1 = document.querySelector(".winner-1");
const winner2 = document.querySelector(".winner-2");
let playing = true;

//
//Rolling dice functionality
//
const tt = roll1.addEventListener("click", function () {
  const dicen = Math.trunc(Math.random() * 6) + 1;
  console.log(dicen);
  dice1.src = `dice-${dicen}.png`;

  roll2.addEventListener("click", function () {
    const dicen2 = Math.trunc(Math.random() * 6) + 1;
    console.log(dicen2);
    dice2.src = `dice-${dicen2}.png`;

    if (dicen > dicen2) {
      winner2.remove("hidden");
      console.log("1.>2");
    } else if (dicen < dicen2) {
      winner1.remove("hidden");
      console.log("22d");
    }
  });
});
newgamebtn.addEventListener("click", function () {
  winner1.remove(winner1);
  winner2.remove(winner2);
});
