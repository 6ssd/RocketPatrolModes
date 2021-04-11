let config = {
    type:Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

//set UI size
let borderUIsize = game.config.height / 15;
let borderPadding = borderUIsize / 3;