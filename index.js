const Fighter = require("./src/Fighter.js");
const weapon = require("./src/Weapon.js");


/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 22, 7);

/**
 * Helper to produce the result of a round
 */

const roundDisplay = (fighter1, fighter2) => {
  fighter1.fight(fighter2);
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1.name,
    loser: fighter2.name,
  } : {
    winner: fighter2.name,
    loser: fighter1.name
  };
};
//console.log(roundDisplay(heracles,boar));

//console.log(score);
let round = 5;
while(round>0){
  console.log(roundDisplay(heracles,boar));
  console.log(roundDisplay(boar,heracles));
  round-=1;
}

console.log(score(heracles,boar));
