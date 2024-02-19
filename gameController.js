const diceNumbers = require('./dices/diceNumbers');

const game = async (heroes) => {
    const villainZarate = getZarate(heroes);

    const superHero = getRandomHero(heroes, villainZarate);

    const startingOrder = getStartingOrder(villainZarate, superHero);

    console.log(`WELCOME TO THE COMBAT ARENA!!`);
    console.log(`------------------------------`);
    console.log(`Hoy combatirán ${superHero.name} y ${villainZarate.name}`);
    console.log(`------------------------------`);
    console.log(`Listado de atributos`);
    const superHeroObject = {
        name: superHero.name,
        intelligence: superHero.powerstats.intelligence,
        strength: superHero.powerstats.strength,
        speed: superHero.powerstats.speed,
        durability: superHero.powerstats.durability,
        power: superHero.powerstats.power,
        combat: superHero.powerstats.combat,
        HP: superHero.powerstats.hitPoints
    }
    const villainZarateObject = {
        name: villainZarate.name,
        intelligence: villainZarate.powerstats.intelligence,
        strength: villainZarate.powerstats.strength,
        speed: villainZarate.powerstats.speed,
        durability: villainZarate.powerstats.durability,
        power: villainZarate.powerstats.power,
        combat: villainZarate.powerstats.combat,
        HP: villainZarate.powerstats.hitPoints
    }
    console.log(superHeroObject);
    console.log(villainZarateObject);
    console.log(`------------------------------`);
    console.log(`El primer asalto es para ${startingOrder[0].name}`);

    let i = 1;
    let turn = 0;
    let noTurn = 1;

    while(villainZarate.powerstats.hitPoints > 0 && superHero.powerstats.hitPoints > 0){
        
        console.log(`------------------------------`);
        console.log(`Comienza el asalto ${i}`);
        console.log(`------------------------------`);
    
        let success;
        console.log(`El asalto es para ${startingOrder[turn].name}`);
    
        const firstDiceThrow = diceNumbers.dice1D100();
    
        if(firstDiceThrow <= startingOrder[0].powerstats.combat){
            success = true;
        }
    
        if(success){
            const secondDiceThrow = diceNumbers.dice1D20();

            console.log(`${startingOrder[turn].name} obtiene un ${firstDiceThrow} y ataca con éxito`);
    
            if(secondDiceThrow > 2 && secondDiceThrow < 18){
                let normalDamage = Math.ceil((startingOrder[noTurn].powerstats.power + startingOrder[noTurn].powerstats.strength) * secondDiceThrow / 100);
                startingOrder[noTurn].powerstats.hitPoints = startingOrder[noTurn].powerstats.hitPoints - normalDamage;
                console.log(`${startingOrder[turn].name} obtiene un ${secondDiceThrow}, empuña su arma y ejerce un daño de ${normalDamage}`);
            }
            else if(secondDiceThrow > 17){
                let totalCriticalDamage;
                if(secondDiceThrow === 18){
                    
                    const thirdDiceThrow = diceNumbers.dice1D3();
    
                    let criticalDamage = (startingOrder[noTurn].powerstats.intelligence * startingOrder[noTurn].powerstats.durability / 100) * thirdDiceThrow;
                    totalCriticalDamage = Math.ceil(((startingOrder[noTurn].powerstats.power + startingOrder[noTurn].powerstats.strength) * secondDiceThrow / 100) + criticalDamage);
                    startingOrder[noTurn].powerstats.hitPoints = startingOrder[noTurn].powerstats.hitPoints - totalCriticalDamage;
                }
                else if(secondDiceThrow === 19){
    
                    const thirdDiceThrow = diceNumbers.dice2D3();
    
                    let criticalDamage = (startingOrder[noTurn].powerstats.intelligence * startingOrder[noTurn].powerstats.durability / 100) * thirdDiceThrow;
                    totalCriticalDamage = Math.ceil(((startingOrder[noTurn].powerstats.power + startingOrder[noTurn].powerstats.strength) * secondDiceThrow / 100) + criticalDamage);
                    startingOrder[noTurn].powerstats.hitPoints = startingOrder[noTurn].powerstats.hitPoints - totalCriticalDamage;
                }
                else if(secondDiceThrow === 20) {
                    const thirdDiceThrow = diceNumbers.dice3D5();
                    let criticalDamage = (startingOrder[noTurn].powerstats.intelligence * startingOrder[noTurn].powerstats.durability / 100) * thirdDiceThrow;
                    totalCriticalDamage = Math.ceil(((startingOrder[noTurn].powerstats.power + startingOrder[noTurn].powerstats.strength) * secondDiceThrow / 100) + criticalDamage);
                    startingOrder[noTurn].powerstats.hitPoints = startingOrder[noTurn].powerstats.hitPoints - totalCriticalDamage;
                }
                console.log(`CRITICAL HIT!! ${startingOrder[turn].name} obtiene un ${secondDiceThrow}, empuña su arma y ejerce un daño de ${totalCriticalDamage}`);
            }
            else{
                let damage = 0;
                if(secondDiceThrow === 1) {
                    const thirdDiceThrow = diceNumbers.dice1D3();
                    damage = Math.ceil(startingOrder[turn].powerstats.speed / thirdDiceThrow);
                    startingOrder[turn].powerstats.hitPoints = startingOrder[turn].powerstats.hitPoints - damage;
                }
                else if(secondDiceThrow === 2) {
                    const thirdDiceThrow = diceNumbers.dice4D3();
                    damage = Math.ceil(startingOrder[turn].powerstats.speed / thirdDiceThrow);
                    startingOrder[turn].powerstats.hitPoints = startingOrder[turn].powerstats.hitPoints - damage;
                }
                console.log(`FAIL!! ${startingOrder[turn].name} obtiene un ${secondDiceThrow} y se clava el arma en su pierna izda. Recibe un daño de ${damage}`);
            }
        }
        else{
            console.log(`El ataque de ${startingOrder[turn].name} no ha sido exitoso`);
        }

        if(turn === 0){
            turn = 1;
        }
        else{
            turn = 0;
        }

        if(noTurn === 0){
            noTurn = 1;
        }
        else{
            noTurn= 0;
        }

        const superHeroObject = {
            name: superHero.name,
            intelligence: superHero.powerstats.intelligence,
            strength: superHero.powerstats.strength,
            speed: superHero.powerstats.speed,
            durability: superHero.powerstats.durability,
            power: superHero.powerstats.power,
            combat: superHero.powerstats.combat,
            HP: superHero.powerstats.hitPoints
        }
        const villainZarateObject = {
            name: villainZarate.name,
            intelligence: villainZarate.powerstats.intelligence,
            strength: villainZarate.powerstats.strength,
            speed: villainZarate.powerstats.speed,
            durability: villainZarate.powerstats.durability,
            power: villainZarate.powerstats.power,
            combat: villainZarate.powerstats.combat,
            HP: villainZarate.powerstats.hitPoints
        }
        console.log(superHeroObject);
        console.log(villainZarateObject);
        i++;
    }
    
    console.log(`------------------------------`);
    console.log(`------------------------------`);
    if(startingOrder[0].powerstats.hitPoints <= 0){
        console.log(`${startingOrder[0].name} ha sido derrotado`);
    }
    else{
        console.log(`${startingOrder[1].name} ha sido derrotado`);
    }
}


const getZarate = (heroes) => {
    const villainZarate = heroes.find(hero => hero.name === "Junkpile");
    return villainZarate;
}

const getRandomHero = (heroes, villainZarate) => {

    let randomNum = 0;
    
    do{
        randomNum = Math.floor(Math.random() * heroes.length);
    } while (randomNum === villainZarate.id || heroes.find(hero => hero.id === randomNum) === undefined);

    const superHero = heroes.find(hero => hero.id === randomNum);
    console.log("superHero dentro de la funcion getRandomHero")
    console.log(superHero)
    return superHero;
}

const getStartingOrder = (villainZarate, superHero) => {


    let turn = [];

    console.log("superHero")
    console.log(superHero)
    if(villainZarate.powerstats.intelligence + villainZarate.powerstats.combat > superHero.powerstats.intelligence + superHero.powerstats.combat){
        turn.push(villainZarate);
        turn.push(superHero);
    }
    else if(villainZarate.powerstats.intelligence + villainZarate.powerstats.combat < superHero.powerstats.intelligence + superHero.powerstats.combat){
        turn.push(superHero);
        turn.push(villainZarate);
    }

    turn.forEach(element => {
        element.powerstats.hitPoints = element.powerstats.strength * 10;
        if(element.powerstats.hitPoints > 666){
            element.powerstats.hitPoints = 666;
        }
    });
    
    return turn;
}

module.exports = {
    game
}