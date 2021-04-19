class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load sounds
        this.load.audio('sfx_explosion', './assets/explosion2.wav');
        this.load.audio('sfx_rocket', './assets/rocket_fire2.wav');
        this.load.audio('sfx_select', './assets/select.wav');
    }

    create() {
        //menu text config
        let menuConfig = {
            fontFamily: 'Garamond',
            fontSize: '32px',
            backgroundColor: '#F3B141',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            fixedWidth: 0
        }

        //menu background
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0xEBD5B3).setOrigin(0, 0);

        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 + (-borderUIsize - borderPadding)*2, 'ROCKET PATROL: Pirate Edition', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - borderUIsize - borderPadding, '2 Player Mode', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Player 1: Use (A) & (D) keys to move & (W) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUIsize + borderPadding, 'Player 2: Use (J) & (L) keys to move & (I) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        this.add.text(game.config.width/2, game.config.height/2 + (borderUIsize + borderPadding)*2, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT))
        {
            //novice mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            };
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT))
        {
            //expert mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            };
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}