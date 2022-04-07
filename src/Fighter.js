const MAX_LIFE = 100;
const weapon = require("./Weapon.js");
const shield = require("./Shield.js");
const artifact = require("./Artifacts.js");

class Fighter {
    constructor(name, strength, dexterity,weapon,shield,artifact,icon) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.damage= 0;
        this.weapon = weapon;
        this.shield = shield;
        this.artifact = artifact;
        this.icon=icon;
    }


    // Launch a fight
    fight(defender) {
        // Calcul defense du defenseur OK
        const defensePoints = this.getDefense(defender);
        console.log("defensePoints : " + defensePoints);
        

        // Calcul attack moi OK
        this.damage =this.getDamage();
        console.log("Damage : " + this.damage);

        //Calcul un dommage (attackPoints) aleatoire de 1 à this.damage
        const attackPoints = this.getRandomInt(this.damage);
        console.log("attackPoints : " + attackPoints);

        // Calcul du damage final
        const damagePoints = Math.max(defensePoints - attackPoints , 0);
        console.log("damagePoints : " + damagePoints);

        defender.life = Math.max(defender.life - attackPoints, 0);
        console.log("defender.life : " + defender.life);
    }

    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }

    // calculer la puissance du coup porté sword+strength
    getDamage(){
        return this.strength + this.weapon.damage;
    }

    getDefense(defender){
       return defender.dexterity + defender.shield.protection;
    }
}

module.exports = Fighter;
