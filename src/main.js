/* 
Nanxiang Wang
Rocket Patrol Mods
4/16/21
Hours: ~10

Music Credits:
Captain Scurvy Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/
*/

/* 
Points Breakdown:
Added Background Music: 5 pts
Added Speed Increase: 5 pts 
Simultaneous 2 Player: 30 pts
Changed Theme: 60 pts
*/

let config = {
    type:Phaser.AUTO,
    width: 1280,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

//reserve keyboard vars
let keyR, keyLEFT, keyRIGHT, keyA, keyD, keyW, keyJ, keyL, keyI;

//set UI size
let borderUIsize = game.config.height / 15;
let borderPadding = borderUIsize / 3;

let bgMusic;