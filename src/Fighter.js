const MAX_LIFE = 100;
const weapon = require("./Weapon.js");
const shield = require("./Shield.js");


class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.damage= 0;
        this.weapon = new weapon("Sword",10);
        this.shield = new shield("Tonnerre",10);
    }


    // Launch a fight
    fight(defender) {
        // Calcul defense du defenseur OK
        const defensePoints = this.getDefense(defender);
        console.log("defensePoints : " + defensePoints);

        // Calcul attack moi OK
        const attackPoints = this.getRandomInt(this.getDamage());
        console.log("attackPoints : " + attackPoints);

        // Calcul du damage final
        const damagePoints = Math.max(defensePoints - attackPoints , 0);
        console.log("damagePoints : " + damagePoints);

        defender.life = Math.max(defender.life - damagePoints, 0);
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
