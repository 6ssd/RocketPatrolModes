class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load sounds
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocket_fire.wav');
        this.load.audio('sfx_select', './assets/select.wav');
    }

    create() {
        //menu text config
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 + (-borderUIsize - borderPadding)*2, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - borderUIsize - borderPadding, '2 Player Mode', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Player 1: Use (A) & (D) keys to move & (W) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUIsize + borderPadding, 'Player 2: Use (J) & (L) keys to move & (I) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
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