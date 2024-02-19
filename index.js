const gameService = require('./gameService');

const start = async ()=>{

    await gameService.getAllHeroes();

}

start();
