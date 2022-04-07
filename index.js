const Fighter = require("./src/Fighter.js");
const weapon = require("./src/Weapon.js");
const shield = require("./src/Shield.js");
const artifact = require("./src/Artifact.js");

//Les ARMES : nom, force, maniabilité, icon
const weaponUnbreableSword = new weapon("The unbreakable Sword of eternity",8,8,"🗡");
const weaponTridentOfOcean = new weapon("The Trident of the ocean",9,6,"🔱");
const weaponTheBowOfFindingWeakness = new weapon("The bow of Find weakness",6,8,"🏹");
const weaponTheSwordsOfEgality = new weapon("The Swords of Egality",8,8,"⚔️");
const weaponPowerOfTheBison = new weapon("bison horn",6,9,"The Bison Horn");

// Les BOUCLIERS : name,protection,maniability, icon
const shieldOfThunder= new shield("Shield of thunder",8,6,"🛡️⚡️🛡️");
const shieldOfTheWizard= new shield("Magic Shield of the Wizard",7,7,"🛡️🧙🏽‍♂️🛡️");
const shieldProtectorTrunk= new shield("The protecting Trunk",7,7,"🛡️🪵🛡️");

// Les artefacts : name,damage,maniability,icon
const artifactPoisonOfGods = new artifact("Poison Of Gods",9,6,"🧪");
const artifactViolinOfMadness = new artifact("Violin Of madness",7,8,"🎻");
const artifactFeatherOfunlikely = new artifact("Feather Of Unlikely",6,9,"🪶");
const artifactTheCallOfTheStar = new artifact("Call Of The Star",5,10,"☄️");


// Fighters have a sword and a shield and a strength and a dexterity
// Fighters : name, strength, dexterity, sword,shield,artifact,icon
const heracles = new Fighter("Heracles", 20, 6,weaponTheSwordsOfEgality,shieldOfThunder,artifactTheCallOfTheStar," 🧔 ");//guerrier
const amrod = new Fighter("Amrod", 20, 6,weaponTheBowOfFindingWeakness,shieldOfTheWizard,artifactViolinOfMadness," 🧝🏼 "); //Elfe
const boar = new Fighter("Erymanthian Boar", 22, 7,weaponPowerOfTheBison,shieldProtectorTrunk,artifactFeatherOfunlikely," 🐗 ");//Cochon
const gandalf = new Fighter("Gandalf", 20, 6,weaponTridentOfOcean,shieldOfTheWizard,artifactPoisonOfGods," 🧙🏽‍♂️ ");//magicien

/**
 * Helper to produce the result of a round
 */

const roundDisplay = (fighter1, fighter2) => {
  fighter1.fight(fighter2);

  let message= `${fighter1.icon}${fighter1.name} attaque : ${fighter2.icon}${fighter2.name}\n`;
  message+=` avec ${fighter1.weapon.icon} ${fighter1.weapon.name}\n`;
  message+=` a l'aide de l'artifact ${fighter1.artifact.icon} ${fighter1.artifact.name}\n`;
  message+= `et cause ${fighter1.damage} pts de dégât à ${fighter2.icon}${fighter2.name}\n`;
  return message;
};

console.log("------------ Round 1 --------------");
console.log(roundDisplay(amrod,boar));
console.log("-----------------------------------");

console.log("------------ Round 2 --------------");
console.log(roundDisplay(gandalf,heracles));
console.log("-----------------------------------");

//console.log(roundDisplay(boar,gandalf));

/**
 * Helper to dispatch fighters between winner and loser
 */
/*
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1.name,
    loser: fighter2.name,
  } : {
    winner: fighter2.name,
    loser: fighter1.name
  };
};


let round = 5;
while(round>0){
  console.log(roundDisplay(heracles,boar));
  console.log(roundDisplay(boar,heracles));
  round-=1;
}

console.log(score(heracles,boar));
*/