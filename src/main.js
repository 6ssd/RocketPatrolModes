let config = {
    type:Phaser.AUTO,
    width: 1280,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI size
let borderUIsize = game.config.height / 15;
let borderPadding = borderUIsize / 3;