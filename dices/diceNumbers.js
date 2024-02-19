const dice1D100 = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    return number;
}

const dice1D20 = () => {
    const number = Math.floor(Math.random() * 20) + 1;
    return number;
}

const dice1D3 = () => {
    const number = Math.floor(Math.random() * 3) + 1;
    return number;
}

const dice2D3 = () => {
    let number = 0;
    for(let i = 0; i < 2; i++){
        number = Math.floor(Math.random() * 3) + 1;
    }
    return number;
}

const dice4D3 = () => {
    let number = 0;

        for(let i = 0; i < 4; i++){
            number += Math.floor(Math.random() * 3) + 1;
        }
        
        return number;
}

const dice3D5 = () => {
    let number = 0;

    for(let i = 0; i < 3; i++){
        number += Math.floor(Math.random() * 5 ) + 1;
    }
    return number;
}

module.exports={
    dice1D100,
    dice1D20,
    dice1D3,
    dice2D3,
    dice4D3,
    dice3D5
}