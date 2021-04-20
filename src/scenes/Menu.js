class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load sounds
        this.load.audio('sfx_explosion', './assets/explosion2.wav');
        this.load.audio('sfx_rocket', './assets/rocket_fire2.wav');
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.image('menu_background', './assets/menu_background.png');
        this.load.image('menu_flag', './assets/menu_flag.png');
    }

    create() {
        //menu text config
        let menuConfig = {
            fontFamily: 'Garamond',
            fontSize: '32px',
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
        this.background = this.add.tileSprite(0, 0, 1280, 480, 'menu_background').setOrigin(0, 0);
        this.flag = this.add.tileSprite(game.config.width/2, borderUIsize+borderPadding, 134, 82, 'menu_flag').setOrigin(0.5, 0);

        //black borders
        this.add.rectangle(0, 0, game.config.width, borderUIsize, 0x000).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUIsize, game.config.width, borderUIsize, 0x000).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUIsize, game.config.height, 0x000).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0x000).setOrigin(0, 0);

        //gold borders
        this.add.rectangle(game.config.width/2, borderUIsize/4, game.config.width - borderPadding*2, borderUIsize/2, 0xFFD700).setOrigin(0.5, 0);
        this.add.rectangle(game.config.width/2, game.config.height - (borderUIsize * (3/4)), game.config.width - borderPadding*2, borderUIsize/2, 0xFFD700).setOrigin(0.5, 0);
        this.add.rectangle(borderUIsize/4, game.config.height/2, borderUIsize/2, game.config.height - borderPadding*2, 0xFFD700).setOrigin(0, 0.5);
        this.add.rectangle(game.config.width - (borderUIsize * (3/4)), game.config.height/2, borderUIsize/2, game.config.height - borderPadding*2, 0xFFD700).setOrigin(0, 0.5);

        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 + (-borderUIsize - borderPadding)*2, 'ROCKET PATROL: Pirate Edition', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - borderUIsize - borderPadding, '2 Player Mode', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Player 1: Use (A) & (D) keys to move & (W) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUIsize + borderPadding, 'Player 2: Use (J) & (L) keys to move & (I) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FFD700';
        this.add.text(game.config.width/2, game.config.height/2 + (borderUIsize + borderPadding)*3, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        
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